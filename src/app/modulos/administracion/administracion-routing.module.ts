import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';

const routes: Routes = [
  {
    path: 'crear-empleado',
    component: CrearEmpleadoComponent
  },
  {
    path: 'buscar-empleado',
    component: BuscarEmpleadoComponent
  },
  {
    path: 'editar-empleado/:id',
    component: EditarEmpleadoComponent
  },
  {
    path: 'eliminar-empleado',
    component: EliminarEmpleadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
