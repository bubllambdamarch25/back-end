const router = require('express').Router();

const db = require('../data/helpers/postsHelpers');
const restricted = require('../auth/restricted');

router.use(restricted);

router.get('/', (req, res) => {
  db.getUserPosts(req.decoded.subject)
    .then(async posts => {
      posts = await Promise.all(posts);
      res.status(200).json(posts)
    })
    .catch(err => res.status(500).json({message: 'Could not retrieve your posts at this time', err}));
})

router.get('/filter/:id', (req, res) => {
  db.getFilteredPosts(req.decoded.school_id, req.params.id)
    .then(async posts => {
      posts = await Promise.all(posts);
      res.status(200).json(posts)
    })
    .catch(err => res.status(500).json({message: 'Could not retrieve posts for school at this time', err}));
})

router.delete('/:id', (req, res) => {
  db.deletePost(req.params.id)
    .then(count => {
      if(count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({message: 'The post you tried to delete was not found'});
      }
    })
    .catch(err => res.status(500).json({message: 'Post could not be deleted at this time', err}));
})

router.put('/:id', (req, res) => {
  if(!req.body.user_id || !req.body.post_content || !req.body.bubbles) {
    res.status(400).json({message: 'Make sure you pass in a user_id, post_content and a bubbles array with the ids'});
  } else {
    db.updatePost(req.params.id, req.body)
      .then(post => res.status(200).json(post))
      .catch(err => res.status(500).json({message: 'Could not update the specified post at this time', err}));
  }
})

router.post('/', (req, res) => {
  if(!req.body.user_id || !req.body.post_content || !req.body.bubbles) {
    res.status(400).json({message: 'Make sure you pass in a user_id, post_content and a bubbles array with the ids'});
  } else {
    db.addPost(req.body)
    .then(newPost => {
      res.status(201).json(newPost)
    })
    .catch(err => res.status(500).json({message: 'Could not create a post at this time', err}));
  }
})

module.exports = router;