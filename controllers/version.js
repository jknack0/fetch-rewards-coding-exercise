const versionRouter = require('express').Router()
const versionCompare = require('../utils/version_helper')

versionRouter.post('/', async (request, response) => {
  const {string1, string2} = request.body

  if(string1 === undefined || string2 === undefined) {
    response.status(400).json({error: `Requests to this service require a JSON object with string1 and string2 entries. You sent: ${JSON.stringify(request.body)}`})
  } else {
    response.json({result: versionCompare(string1, string2)})
  }
})

module.exports = versionRouter