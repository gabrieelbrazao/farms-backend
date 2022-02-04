import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Farms extends BaseSchema {
  protected tableName = 'farms'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table
        .integer('state_id')
        .unsigned()
        .index()
        .references('states.id')
        .notNullable()
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('cpf', 14)
      table.string('cnpj', 18)
      table.string('farmer_name').notNullable()
      table.string('farm_name').notNullable()
      table.string('city').notNullable()
      table.float('agricultural_area').notNullable()
      table.float('vegetation_area').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
