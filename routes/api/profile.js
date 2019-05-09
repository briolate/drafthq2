const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Profile = require('../../models/Profile');
const User = require('../../models/User');
const Member = require('../../models/Member');

// @route    GET api/profile/me
// @desc     Get current user's profile
// @access   Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('teamName', 'Enter Team Name to continue')
        .not()
        .isEmpty(),
      check('seasons', 'Add at least one season to continue')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      teamName,
      motto,
      seasons,
      playoffs,
      championships,
      lastPlaces
    } = req.body;

    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (teamName) profileFields.teamName = teamName;
    if (motto) profileFields.motto = motto;
    if (seasons) {
      profileFields.seasons = seasons.split(',').map(season => season.trim());
    }
    if (playoffs) {
      profileFields.playoffs = playoffs
        .split(',')
        .map(playoff => playoff.trim());
    }
    if (championships) {
      profileFields.championships = championships
        .split(',')
        .map(championship => championship.trim());
    }
    if (lastPlaces) {
      profileFields.lastPlaces = lastPlaces
        .split(',')
        .map(lastPlace => lastPlace.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        // Update profile
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }
      // Create profile
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/profile
// @desc     Delete profile and user
// @access   Private

router.delete('/', auth, async (req, res) => {
  try {
    // Remove user's members
    await Member.deleteMany({ user: req.user.id });
    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Remove user
    await User.findOneAndRemove({ _id: req.user.id });

    res.json({ msg: 'User has been deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/profile/drafts
// @desc     Add draft to profile
// @access   Private
router.put(
  '/drafts',
  [
    auth,
    [
      check('year', 'Year is required')
        .not()
        .isEmpty(),
      check('qb', 'QB is required')
        .not()
        .isEmpty(),
      check('rb1', 'RB1 is required')
        .not()
        .isEmpty(),
      check('rb2', 'RB2 is required')
        .not()
        .isEmpty(),
      check('wr1', 'WR1 is required')
        .not()
        .isEmpty(),
      check('wr2', 'WR2 is required')
        .not()
        .isEmpty(),
      check('te', 'TE is required')
        .not()
        .isEmpty(),
      check('dst', 'D/ST is required')
        .not()
        .isEmpty(),
      check('k', 'K is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { year, qb, rb1, rb2, rb3, wr1, wr2, wr3, te, k, dst } = req.body;

    const newDraft = {
      year,
      qb,
      rb1,
      rb2,
      rb3,
      wr1,
      wr2,
      wr3,
      te,
      k,
      dst
    };

    try {
      const profile = await Profile.findOne({ user: req.user.id });

      profile.drafts.unshift(newDraft);

      await profile.save();

      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/profile/drafts/:draft_id
// @desc     Delete draft from profile
// @access   Private
router.delete('/drafts/:draft_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    // Get remove index
    const removeIndex = profile.drafts
      .map(draft => draft.id)
      .indexOf(req.params.edu_id);

    profile.drafts.splice(removeIndex, 1);

    await profile.save();

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
