import jwt from 'jwt-simple';
import moment from 'moment';
import Person from '../models/personModel';

export const ensureIsAuthenficated = (req, res, next) => {
  if (!req.headers.autorization) {
    return res.status(401).send('Token is missing');
  }
  ('Bearer ');
  const token = req.headers.autorization.split('')[1];

  let payload = null;
  try {
    payload = jwt.decode(token, process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(401).send('Invalid token');
  }

  if (payload.exp <= moment().unix()) {
    res.status(401).send('TokenExpired');
  }

  const personId = payload.iss;
  Person.findById(personId, (err, person) => {
    if (err) {
      return res.status(401).send('PersonNotFound');
    }
    req.userId = personId;
    next();
  });
};
