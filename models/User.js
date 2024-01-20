const { Schema, model } = require('mongoose');

// Schema to create a user model
const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /@/,
    },
    
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    },
    {
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model('user', userSchema);

module.exports = User;
