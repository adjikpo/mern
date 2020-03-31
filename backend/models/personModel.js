import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

let personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

personSchema.pre('save', function (next) {
  let person = this;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(person.password, salt, function (err, hash) {
      person.password = hash;
      next();
    });
  });
});

export default mongoose.model('Person', personSchema);
