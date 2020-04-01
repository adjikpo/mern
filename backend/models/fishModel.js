import { Schema } from 'mongoose';

let fishSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['available', 'unavailable']
  },
  desc: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

export default fishSchema;
