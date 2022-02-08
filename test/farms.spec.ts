import { FarmFactory } from 'Database/factories/Farm'
import test from 'japa'
import supertest from 'supertest'

test.group('States', () => {
  const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`

  test('Deverá retornar todas as fazendas', async (assert) => {
    const farms = await FarmFactory.createMany(10)
    const { body } = await supertest(BASE_URL).get('/farms').expect(200)

    assert.equal(body.length, farms.length)
  })

  test('Deverá retornar a fazenda com o ID desejado', async (assert) => {
    const farm = await FarmFactory.create()
    const { body } = await supertest(BASE_URL).get(`/farms/${farm.id}`).expect(200)

    assert.isTrue(body.length > 0)
    assert.equal(body[0].id, farm.id)
  })

  test('Deverá adicionar uma fazenda no banco de dados', async () => {
    const farm = await FarmFactory.make()

    await supertest(BASE_URL)
      .post('/farms')
      .send({
        ...farm.$attributes,
        cultures: [1, 2, 3],
      })
      .expect(204)
  })

  test('Deverá alterar uma fazenda no banco de dados', async () => {
    const farm = await FarmFactory.create()
    const anotherFarm = await FarmFactory.make()

    await supertest(BASE_URL)
      .put(`/farms/${farm.id}`)
      .send({
        ...anotherFarm.$attributes,
        cultures: [1, 2, 3],
      })
      .expect(204)
  })

  test('Deverá deletar uma fazenda do banco de dados', async () => {
    const farm = await FarmFactory.create()

    await supertest(BASE_URL).delete(`/farms/${farm.id}`).expect(204)
  })

  test('Deverá retornar 404 se fazenda for inexistente (read)', async () => {
    await supertest(BASE_URL).get(`/farms/${99999}`).expect(404)
  })

  test('Deverá retornar 404 se fazenda for inexistente (update)', async () => {
    await supertest(BASE_URL).put(`/farms/${99999}`).expect(404)
  })

  test('Deverá retornar 404 se fazenda for inexistente (delete)', async () => {
    await supertest(BASE_URL).delete(`/farms/${99999}`).expect(404)
  })
})
