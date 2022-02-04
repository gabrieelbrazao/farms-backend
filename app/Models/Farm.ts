import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  computed,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Culture from './Culture'
import State from './State'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public cnpj: string

  @column({ serializeAs: 'farmerName' })
  public farmerName: string

  @column({ serializeAs: 'farmName' })
  public farmName: string

  @column()
  public city: string

  @column({ serializeAs: 'agriculturalArea' })
  public agriculturalArea: number

  @column({ serializeAs: 'vegetationArea' })
  public vegetationArea: number

  @computed()
  public get totalArea() {
    return this.vegetationArea + this.agriculturalArea
  }

  @computed()
  public get cpfCnpj() {
    return this.cpf ? this.cpf : this.cnpj
  }

  @manyToMany(() => Culture, {
    pivotTimestamps: true,
  })
  public cultures: ManyToMany<typeof Culture>

  @column({ serializeAs: null })
  public stateId: number

  @belongsTo(() => State)
  public state: BelongsTo<typeof State>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime
}
