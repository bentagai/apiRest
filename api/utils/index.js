// Return HTTP error with details in JSON
function handleError (err, res) {
  return res.status(400).json(err)
}

module.exports = {
  handleError
}
