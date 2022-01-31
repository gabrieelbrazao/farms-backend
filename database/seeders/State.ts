import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import State from 'App/Models/State'

export default class StateSeeder extends BaseSeeder {
  public async run() {
    await State.updateOrCreateMany('name', [
      { name: 'Acre' },
      { name: 'Alagoas' },
      { name: 'Amapá' },
      { name: 'Amazonas' },
      { name: 'Bahia' },
      { name: 'Ceará' },
      { name: 'Distrito Federal' },
      { name: 'Espírito Santo' },
      { name: 'Goiás' },
      { name: 'Maranhão' },
      { name: 'Mato Grosso' },
      { name: 'Mato Grosso do Sul' },
      { name: 'Minas Gerais' },
      { name: 'Pará' },
      { name: 'Paraíba' },
      { name: 'Paraná' },
      { name: 'Pernambuco' },
      { name: 'Piauí' },
      { name: 'Rio de Janeiro' },
      { name: 'Rio Grande do Norte' },
      { name: 'Rio Grande do Sul' },
      { name: 'Rondônia' },
      { name: 'Roraima' },
      { name: 'Santa Catarina' },
      { name: 'São Paulo' },
      { name: 'Sergipe' },
      { name: 'Tocantins' },
    ])
  }
}
