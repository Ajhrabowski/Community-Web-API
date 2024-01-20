const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thoughts model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      Min_Length: 1, max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
      getters: true,
      
    },
    username: {
      type: String,
      required: true,
   
    },
    
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
