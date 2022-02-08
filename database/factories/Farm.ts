import Factory from '@ioc:Adonis/Lucid/Factory'
import Farm from 'App/Models/Farm'

export const FarmFactory = Factory.define(Farm, ({ faker }) => {
  faker.locale = 'pt_BR'

  return {
    agriculturalArea: faker.datatype.number({ min: 1, max: 200 }),
    vegetationArea: faker.datatype.number({ min: 1, max: 200 }),
    city: faker.address.city(),
    cpf: '999.999.999-99',
    cnpj: '99.999.999/9999-99',
    farmName: faker.company.companyName(),
    farmerName: faker.name.findName(),
    stateId: faker.datatype.number({ min: 1, max: 26 }),
  }
}).build()
