import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base';
  numero:number = 0;
  resultado:number = 0;

  aumentar():void {
    this.numero = this.numero + 1;
  }

  disminuir():void {
    this.numero = this.numero - 1;
  }

  sumar(numero1:string, numero2:string):void {
    this.resultado = parseFloat(numero1)+parseFloat(numero2);
  }
}
