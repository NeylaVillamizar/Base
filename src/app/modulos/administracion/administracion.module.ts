import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearEmpleadoComponent } from './empleados/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleados/editar-empleado/editar-empleado.component';
import { EliminarEmpleadoComponent } from './empleados/eliminar-empleado/eliminar-empleado.component';
import { BuscarEmpleadoComponent } from './empleados/buscar-empleado/buscar-empleado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearEmpleadoComponent,
    EditarEmpleadoComponent,
    EliminarEmpleadoComponent,
    BuscarEmpleadoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
