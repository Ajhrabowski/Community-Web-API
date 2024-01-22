const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require('dayjs')

// Schema to create Thoughts model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      Min_Length: 1, 
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dayjs(timestamp).format(),  
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
      virtuals: true
    },
  }
);
thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
