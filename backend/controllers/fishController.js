import mongoose from 'mongoose';
import fishSchema from '../models/fishModel';

const Fish = mongoose.model('Fish', fishSchema);

export const addFish = (req, res) => {
  let newFish = new Fish(req.body);
  newFish.save((err, createdFish) => {
    if (err) {
      res.send(err);
    }

    res.json(createdFish);
  });
};
export const getAllFish = (req, res) => {
  Fish.find({}, (err, fish) => {
    if (err) {
      res.send('an error occured while trying to get fish');
    }

    res.send(fish);
  });
};

export const updateFish = (req, res) => {
  Fish.findOneAndUpdate(
    {
      _id: req.params.id
    },
    req.body,
    { new: true },
    (err, updatedFish) => {
      if (err) {
        res.status(401).send('Error to update fish');
      }

      res.json(updatedFish);
    }
  );
};

export const removeFish = (req, res) => {
  Fish.remove({ _id: req.params.id }, (error, deletedFish) => {
    if (error) {
      res.send('error to remove');
    }
    res.send('delete fish is ok ! ');
  });
};
