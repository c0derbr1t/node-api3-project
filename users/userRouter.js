const express = require('express');

const Users = require('./userDb.js');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then(item => {
      res.status(200).json(item)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'The user information could not be retrieved. ',
        error: err
      });
    });
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  console.log("req.user: ", req.user);
  console.log("req.user.id: ", req.user.id);
  Users.getById(req.user.id)
    .then(item => {
      if (item) {
        res.status(200).json(item);
      } else {
        res.status(404).json({
          message: 'The user with the specified ID does not exist'
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'The user information could not be retrieved. ',
        error: err
      });
    })
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;

function validateUserId(req, res, next) {
  const { id } = req.params;

  Users.getById(id)
    .then(item => {
      if (item) {
        req.user = item;
        next();
      } else {
        res.status(400).json({ 
          message: "invalid user id" 
        })
      }
    })
}