const Coaster = require('../models/coaster')
const Comment = require('../models/comment')

const getCoasters = async (req, res) => {
  try {
    const coasters = await Coaster.find()
    return res.status(200).json({ coasters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCoasterById = async (req, res) => {
  try {
    const { id } = req.params
    const coaster = await Coaster.findById(id)
    if (coaster) {
      return res.status(200).json({ coaster })
    }
    return res.status(404).send('Coaster with specified ID does not exist.')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const setScore = async (req, res) => {
  try {
    const newScore = await Coaster.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    await newScore.save()
    return res.status(201).json({ newScore })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getComments = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.find({ coaster_id: id })
    if (comment) {
      return res.status(200).json({ comment })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(200).json({ comment })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment Deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const coasterByRating = async (req, res) => {
  try {
    const { score } = req.params
    const coasters = await Coaster.find({
      score
    })
    return res.status(200).json({ coasters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const addCoaster = async (req, res) => {
  try {
    const coaster = await new Coaster(req.body)
    await coaster.save()
    return res.status(200).json({ coaster })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

const deleteCoaster = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Coaster.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Deleted')
    }
    throw new Error('Not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCoasters,
  getCoasterById,
  getComments,
  createComment,
  deleteComment,
  addCoaster,
  coasterByRating,
  deleteCoaster,
  setScore
}
