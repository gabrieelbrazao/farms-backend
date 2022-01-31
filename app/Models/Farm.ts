import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Culture from './Culture'
import State from './State'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpfCnpj: string

  @column()
  public farmerName: string

  @column()
  public farmName: string

  @column()
  public city: string

  @column()
  public agriculturalArea: number

  @column()
  public vegetationArea: number

  @manyToMany(() => Culture, {
    pivotTimestamps: true,
  })
  public cultures: ManyToMany<typeof Culture>

  @column()
  public stateId: number

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
