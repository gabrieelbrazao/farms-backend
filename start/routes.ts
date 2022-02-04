import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'FarmsController.index')
  Route.get('/:id', 'FarmsController.read')
  Route.post('/', 'FarmsController.create')
  Route.put('/:id', 'FarmsController.update')
  Route.delete('/:id', 'FarmsController.delete')
}).prefix('/farms')

Route.group(() => {
  Route.get('/', 'StatesController.index')
}).prefix('/states')

Route.group(() => {
  Route.get('/', 'CulturesController.index')
}).prefix('/cultures')
