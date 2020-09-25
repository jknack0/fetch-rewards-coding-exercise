const app = require('../app')
const supertest = require('supertest')

const api = supertest(app)

describe('Sending requests to the version endpoints', () => {
  test('Api responds with the correct status code and body if the strings are present and the same length', async () => {
    const properTestObject = {
      string1: '1.1.1',
      string2: '2.2.2'
    }

    const response = await api.post('/api/version')
      .send(properTestObject)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.result).toContain('before')

  })

  test('Api responds with the correct status code and body if the strings are present and different lengths', async () => {
    const properTestObject = {
      string1: '1.3.1.1.1.1',
      string2: '1.2.2'
    }

    const response = await api.post('/api/version')
      .send(properTestObject)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.result).toContain('after')
  })

  test('Api responds with the correct status code and error if a string is missing', async () => {
    const wrongTestObject = {
      string1: '1.1.1'
    }

    const response = await api.post('/api/version')
      .send(wrongTestObject)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(response.body.error).toContain('missing parameter')
  })

  test('Api responds with the correct status code and error if an unknown endpoint is requested', async () => {
    const response = await api.get('/api/version')
      .expect(404)
      .expect('Content-Type', /application\/json/)

    expect(response.body.error).toContain('unknown endpoint')
  })
})