const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');

const User = require('../../models/User');
const Profile = require('../../models/Profile');
const Member = require('../../models/Member');

// @route    POST api/member
// @desc     Create a member
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('memberTeamName', "Enter member's Team Name to continue")
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
      memberTeamName,
      memberSeasons,
      memberPlayoffs,
      memberChampionships,
      memberLastPlaces
    } = req.body;

    // Build member object
    const memberFields = {};
    memberFields.user = req.user.id;
    if (memberTeamName) memberFields.memberTeamName = memberTeamName;
    if (memberSeasons) {
      memberFields.memberSeasons = memberSeasons
        .split(',')
        .map(memberSeason => memberSeason.trim());
    }
    if (memberPlayoffs) {
      memberFields.memberPlayoffs = memberPlayoffs
        .split(',')
        .map(memberPlayoff => memberPlayoff.trim());
    }
    if (memberChampionships) {
      memberFields.memberChampionships = memberChampionships
        .split(',')
        .map(memberChampionship => memberChampionship.trim());
    }
    if (memberLastPlaces) {
      memberFields.memberLastPlaces = memberLastPlaces
        .split(',')
        .map(memberLastPlace => memberLastPlace.trim());
    }

    try {
      let member = await Member.findById(req.params.id);
      if (member) {
        // Update member
        member = await Member.findOneAndUpdate(
          { user: req.user.id },
          { $set: memberFields },
          { new: true }
        );

        return res.json(member);
      }
      // Create member
      member = new Member(memberFields);

      await member.save();
      res.json(member);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    GET api/member/:id
// @desc     Get current user's members
// @access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const members = await Member.find({ user: req.user.id });

    if (!members) {
      return res.status(400).json({ msg: "You haven't added any members" });
    }

    res.json(members);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route    Get api/member/view-member/:member_id
// @desc     Get member by ID
// @access   Private
router.get('/view-member/:member_id', auth, async (req, res) => {
  try {
    const member = await Member.findById(req.params.member_id);

    if (!member) {
      return res.status(404).json({ msg: 'Member not found' });
    }
    res.json(member);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Member not found' });
    }
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/member/edit-member
// @desc     Edit a member
// @access   Private
router.put(
  '/edit-member',
  [
    auth,
    [
      check('memberTeamName', "Enter member's Team Name to continue")
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
      memberTeamName,
      memberSeasons,
      memberPlayoffs,
      memberChampionships,
      memberLastPlaces
    } = req.body;

    // Build member object
    const memberFields = {};
    memberFields.user = req.user.id;
    if (memberTeamName) memberFields.memberTeamName = memberTeamName;
    if (memberSeasons) {
      memberFields.memberSeasons = memberSeasons
        .split(',')
        .map(memberSeason => memberSeason.trim());
    }
    if (memberPlayoffs) {
      memberFields.memberPlayoffs = memberPlayoffs
        .split(',')
        .map(memberPlayoff => memberPlayoff.trim());
    }
    if (memberChampionships) {
      memberFields.memberChampionships = memberChampionships
        .split(',')
        .map(memberChampionship => memberChampionship.trim());
    }
    if (memberLastPlaces) {
      memberFields.memberLastPlaces = memberLastPlaces
        .split(',')
        .map(memberLastPlace => memberLastPlace.trim());
    }

    try {
      let member = await Member;

      if (member) {
        // Update member
        member = await Member.findOneAndUpdate(
          { member },
          { $set: memberFields },
          { new: true }
        );

        return res.json(member);
      } else res.json(member);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    Delete api/member/:id
// @desc     Delete member by ID
// @access   Private
router.delete('/', auth, async (req, res) => {
  try {
    let member = await Member;

    // Update member
    member = await Member.findOneAndDelete({ member });

    res.json({ msg: 'Member deleted' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Member not found' });
    }
    res.status(500).send('Server Error');
  }
});

// // @route    PUT api/member/:id/drafts
// // @desc     Add draft to member
// // @access   Private
// router.put(
//   '/:id/drafts',
//   [
//     auth,
//     [
//       check('year', 'Year is required')
//         .not()
//         .isEmpty(),
//       check('qb', 'QB is required')
//         .not()
//         .isEmpty(),
//       check('rb1', 'RB1 is required')
//         .not()
//         .isEmpty(),
//       check('rb2', 'RB2 is required')
//         .not()
//         .isEmpty(),
//       check('wr1', 'WR1 is required')
//         .not()
//         .isEmpty(),
//       check('wr2', 'WR2 is required')
//         .not()
//         .isEmpty(),
//       check('te', 'TE is required')
//         .not()
//         .isEmpty(),
//       check('dst', 'D/ST is required')
//         .not()
//         .isEmpty(),
//       check('k', 'K is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     const { year, qb, rb1, rb2, rb3, wr1, wr2, wr3, te, k, dst } = req.body;

//     const newDraft = {
//       year,
//       qb,
//       rb1,
//       rb2,
//       rb3,
//       wr1,
//       wr2,
//       wr3,
//       te,
//       k,
//       dst
//     };

//     try {
//       const member = await Member.findById(req.params.id);

//       member.drafts.unshift(newDraft);

//       await member.save();

//       res.json(member);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

module.exports = router;
