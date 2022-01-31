import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Culture from 'App/Models/Culture'

export default class CultureSeeder extends BaseSeeder {
  public async run() {
    await Culture.createMany([
      { name: 'Soja' },
      { name: 'Milho' },
      { name: 'Algodão' },
      { name: 'Café' },
      { name: 'Cana de Açucar' },
    ])
  }
}
