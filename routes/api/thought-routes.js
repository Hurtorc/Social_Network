
const router = require('express').Router();
const { Thought, Reaction} = require('../../models')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', (req,res)=> {
    Thought.find({})
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', (req,res)=> {
    Thought.create(req.body)
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', (req,res)=> {
    Thought.findOne({_id: req.params.thoughtId})
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/', (req,res)=> {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        req.body,
        {new: true}
    )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', (req,res)=> {
    Thought.findOneAndDelete({_id: req.params.thoughtId})
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', (req,res)=> {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$push: {reactions: req.body}},
        {new: true}
    )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {
    Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: {reactionId: req.params.reactionId}}},
        {new: true}
    )
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;
