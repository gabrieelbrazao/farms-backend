import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import State from 'App/Models/State'

export default class StatesController {
  public async index({ response }: HttpContextContract) {
    const states = await State.query().orderBy('name', 'asc')
    response.ok(states)
  }
}
