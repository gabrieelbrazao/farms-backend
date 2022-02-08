import test from 'japa'
import supertest from 'supertest'

test.group('Cultures', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  test('Deverá retornar todas as culturas', async () => {
    await supertest(BASE_URL).get('/cultures').expect(200)
  })
})
