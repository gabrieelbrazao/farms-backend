import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Farm from 'App/Models/Farm'

export default class FarmsController {
  public async index() {
    return await Farm.query().preload('state').preload('cultures')
  }

  public async create({ request, response }: HttpContextContract) {
    const data = { ...request.body() }
    delete data.cultures

    const farm = await Farm.create(data)

    if (!farm.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar criar fazenda' })
      return
    }

    farm.related('cultures').attach(request.body().cultures)

    response.noContent()
  }
}
