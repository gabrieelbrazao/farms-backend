import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CultureFarm extends BaseSchema {
  protected tableName = 'culture_farm'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table
        .integer('farm_id')
        .unsigned()
        .references('farms.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .integer('culture_id')
        .unsigned()
        .references('cultures.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.unique(['farm_id', 'culture_id'])

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
