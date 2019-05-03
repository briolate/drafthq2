const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  memberTeamName: {
    type: String,
    required: true,
    max: 40
  },
  memberSeasons: {
    type: [String]
  },
  memberPlayoffs: {
    type: [String]
  },
  memberChampionships: {
    type: [String]
  },
  memberLastPlaces: {
    type: [String]
  },
  memberDrafts: [
    {
      year: {
        type: Number,
        required: true
      },
      qb: {
        type: Number,
        required: true
      },
      rb1: {
        type: Number,
        required: true
      },
      rb2: {
        type: Number,
        required: true
      },
      rb3: {
        type: Number
      },
      wr1: {
        type: Number,
        required: true
      },
      wr2: {
        type: Number,
        required: true
      },
      wr3: {
        type: Number
      },
      te: {
        type: Number,
        required: true
      },
      dst: {
        type: Number,
        required: true
      },
      k: {
        type: Number,
        required: true
      }
    }
  ]
});

module.exports = Member = mongoose.model('member', MemberSchema);
