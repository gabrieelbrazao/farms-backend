import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Farm from 'App/Models/Farm'

export default class FarmsController {
  public async index({ response }: HttpContextContract) {
    const farms = await Farm.query().preload('state').preload('cultures')
    response.ok(farms)
  }

  public async read({ request, response }: HttpContextContract) {
    const farm = await Farm.query()
      .where('id', request.param('id'))
      .preload('state')
      .preload('cultures')

    if (farm.length === 0) {
      response.notFound({ erro: 'Fazenda não encontrada' })
      return
    }

    response.ok(farm)
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

  public async update({ request, response }: HttpContextContract) {
    const farm = await Farm.find(request.param('id'))

    if (!farm) {
      response.notFound({ erro: 'Fazenda não encontrada' })
      return
    }

    const data = { ...request.body() }
    delete data.cultures

    await farm.merge(data).save()

    if (!farm.$isPersisted) {
      response.internalServerError({ erro: 'Erro ao tentar atualizar fazenda' })
      return
    }

    await farm.related('cultures').sync(request.body().cultures)

    response.noContent()
  }

  public async delete({ request, response }: HttpContextContract) {
    const farm = await Farm.find(request.param('id'))

    if (!farm) {
      response.notFound({ erro: 'Fazenda não encontrada' })
      return
    }

    await farm.delete()

    if (!farm.$isDeleted) {
      response.internalServerError({ erro: 'Erro ao tentar excluir fazenda' })
      return
    }

    response.noContent()
  }
}
