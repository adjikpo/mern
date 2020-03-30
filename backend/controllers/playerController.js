import mongoose from 'mongoose';
import playerSchema from '../models/playerModel';

const Player = mongoose.model('Player', playerSchema);

export const add = (req, res) => {
  let newPlayer = new Player(req.body);
  newPlayer.save((err, createdPlayer) => {
    if (err) {
      res.send(err);
    }

    res.json(createdPlayer);
  });
};

export const getAll = (req, res) => {
  Player.find({}, (err, players) => {
    if (err) {
      res.send('an error occured while trying to get players');
    }

    res.send(players);
  });
};

export const getById = (req, res) => {
  Player.findById(req.params.id, (error, players) => {
    if (error) {
      res.send('error to get player');
    }
    res.json(players);
  });
};

export const update = (req, res) => {
  Player.findOneAndUpdate(
    {
      _id: req.params.id
    },
    req.body,
    {
      new: true
    },
    (error, updatedPlayer) => {
      if (error) {
        res.send('error to update');
      }
      res.json(updatedPlayer);
    }
  );
};

export const remove = (req, res) => {
  Player.remove(
    {
      _id: req.params.id
    },
    (error, deletedPlayer) => {
      if (error) {
        res.send('error to update');
      }
      res.send('delete player is ok ! ');
    }
  );
};
