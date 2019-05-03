const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  teamName: {
    type: String,
    required: true,
    max: 40
  },
  seasons: {
    type: [String]
  },
  playoffs: {
    type: [String]
  },
  championships: {
    type: [String]
  },
  lastPlaces: {
    type: [String]
  },
  drafts: [
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
  // members: [
  //   {
  //     memberTeamName: {
  //       type: String,
  //       required: true,
  //       max: 40
  //     },
  //     memberSeasons: {
  //       type: [String]
  //     },
  //     memberPlayoffs: {
  //       type: [String]
  //     },
  //     memberChampionships: {
  //       type: [String]
  //     },
  //     memberLastPlaces: {
  //       type: [String]
  //     },
  //     memberDrafts: [
  //       {
  //         year: {
  //           type: Number,
  //           required: true
  //         },
  //         qb: {
  //           type: Number,
  //           required: true
  //         },
  //         rb1: {
  //           type: Number,
  //           required: true
  //         },
  //         rb2: {
  //           type: Number,
  //           required: true
  //         },
  //         rb3: {
  //           type: Number
  //         },
  //         wr1: {
  //           type: Number,
  //           required: true
  //         },
  //         wr2: {
  //           type: Number,
  //           required: true
  //         },
  //         wr3: {
  //           type: Number
  //         },
  //         te: {
  //           type: Number,
  //           required: true
  //         },
  //         dst: {
  //           type: Number,
  //           required: true
  //         },
  //         k: {
  //           type: Number,
  //           required: true
  //         }
  //       }
  //     ]
  //   }
  // ]
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
