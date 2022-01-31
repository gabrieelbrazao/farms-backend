// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Farm from 'App/Models/Farm'

export default class FarmsController {
  public async index() {
    return await Farm.query().preload('state').preload('cultures')
  }
}
