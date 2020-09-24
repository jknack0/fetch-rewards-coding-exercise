const versionRouter = require('express').Router()
const versionCompare = require('../utils/version_helper')

versionRouter.post('/', async (request, response) => {
  const body = request.body
  const string1 = body.string1
  const string2 = body.string2

  if(!string1 || !string2)
    return response.status(400).json({error: 'missing parameter'})

  const result = versionCompare(string1, string2)

  response.json({'result': `${string1} is ${result} ${string2}`})
})

module.exports = versionRouter