import bcrypt from 'bcryptjs';
import jwt from 'jwt-simple';
import moment from 'moment';
import Person from '../models/personModel';

export const signUp = async (req, res) => {
  let person = new Person(req.body);
  try {
    let createPerson = await person.save();
    res.json(createPerson);
  } catch (error) {
    res.send('Error cet utilisateur est déjà en base');
  }
};

export const login = async (req, res) => {
  console.log(req.body);
  const person = await Person.findOne({ email: req.body.email });

  if (!person) {
    return res.send('not exist');
  }
  const password = req.body.password;
  bcrypt.compare(password, person.password, function (error, success) {
    if (success) {
      //console.log('Hello ' + person.firstName + ' ' + person.lastName);
      const payload = {
        exp: moment().add(1, 'hour').unix(),
        iat: moment().unix(),
        iss: person.id
      };

      let token = jwt.encode(payload, process.env.TOKEN_SECRET);
      res.json({
        firstName: person.firstName,
        lastName: person.lastName,
        token: `Bearer ${token}`,
        expiration: moment().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')
      });
    } else {
      res.send('password incorect');
    }
  });
};
