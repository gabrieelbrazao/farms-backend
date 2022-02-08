import test from 'japa'
import supertest from 'supertest'

test.group('States', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  test('Deverá retornar todos os estados', async () => {
    await supertest(BASE_URL).get('/states').expect(200)
  })
})
