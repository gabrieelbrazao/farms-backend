import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Culture from 'App/Models/Culture'

export default class CulturesController {
  public async index({ response }: HttpContextContract) {
    const cultures = await Culture.query().orderBy('name', 'asc')
    response.ok(cultures)
  }
}
