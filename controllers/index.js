const Coaster = require('../models/coaster')

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

const getComments = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      return res.status(200).json({ comment })
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCoasters,
  getCoasterById,
  getComments
}
