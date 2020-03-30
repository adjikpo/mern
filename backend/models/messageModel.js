import { Schema } from 'mongoose';

const messageSchema = new Schema({
  msg: {
    type: String,
    required: true
  },
  messages: { type: Schema.Types.ObjectId, ref: 'User' }
});

export default messageSchema;
