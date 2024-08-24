import { Component } from '@angular/core';
import { CalculadoraFuncionesComponent } from '../calculadora-funciones/calculadora-funciones.component';

@Component({
  selector: 'app-calculadora-interfaz',
  standalone: true,
  imports: [CalculadoraFuncionesComponent],
  templateUrl: './calculadora-interfaz.component.html',
  styleUrl: './calculadora-interfaz.component.css'
})
export class CalculadoraInterfazComponent {
  
  //ATRIBUTOS
  valor1 : number = 0
  valor2 : number = 0
  resultado : number = 0
  borrado : boolean = true

  //FUNCIONES
  DefinirVal1(event : any){
    console.log(event.target.value)
    this.valor1 = parseInt(event.target.value);
    if(isNaN(this.valor1)) this.valor1 = 0
  }

  DefinirVal2(event : any){
    console.log(event.target.value)
    this.valor2 = parseInt(event.target.value);
    if(isNaN(this.valor2)) this.valor2 = 0
  }

  mostrarResultado(resultado : number){
    if(resultado == undefined) {
      console.log("Resultado: " + resultado)
      this.resultado = 0;
      this.borrado = false;
    }
    else {
      this.resultado = resultado;
      this.borrado = true;
    }
  }
}
