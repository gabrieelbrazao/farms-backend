import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'FarmsController.index')
  Route.post('/', 'FarmsController.create')
  Route.put('/:id', 'FarmsController.update')
}).prefix('/farms')
