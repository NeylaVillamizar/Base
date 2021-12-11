import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/empleado.modelo';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {


  fgValidator: FormGroup = this.fb.group({
    'nombres': ['', [Validators.required]],
    'apellidos': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'edad': ['', [Validators.required]],
    'fechanacimiento': ['', [Validators.required]],
    'sueldo': ['', [Validators.required]],
    'esdirectivo': ['', [Validators.required]],
    'escliente': ['', [Validators.required]],
    'clave': ['', [Validators.required]]
  })
  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
  }
 
  GuardarEmpleado(){
    let nombres = this.fgValidator.controls["nombres"].value;
    let apellidos = this.fgValidator.controls["apellidos"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    let email = this.fgValidator.controls["email"].value;
    let edad = this.fgValidator.controls["edad"].value;
    let fechanacimiento = this.fgValidator.controls["fechanacimiento"].value;
    let sueldo = parseInt(this.fgValidator.controls["sueldo"].value);
    let esdirectivo = this.fgValidator.controls["edad"].value;
    let escliente = this.fgValidator.controls["fechanacimiento"].value;
    let clave = this.fgValidator.controls["sueldo"].value;
    let p = new ModeloEmpleado();
    p.nombres = nombres;
    p.apellidos = apellidos;
    //p.telefono = telefono;
    //p.direccion = direccion;
    p.email = email;
    //p.edad = edad;
    //p.fechanacimiento = fechanacimiento;
    //p.sueldo = sueldo;
    //p.esdirectivo = esdirectivo;
    //p.escliente = escliente;
    //p.clave = clave;
    
    this.servicioEmpleado.CrearEmpleado(p).subscribe((datos: ModeloEmpleado) => {
      alert(datos);
      this.router.navigate(["/administracion/buscar-empleado"])
    })
  }
}
