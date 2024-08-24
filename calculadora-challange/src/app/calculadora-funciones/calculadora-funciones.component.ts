import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora-funciones',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-funciones.component.html',
  styleUrl: './calculadora-funciones.component.css'
})
export class CalculadoraFuncionesComponent {
  //
  @Input() valor1 : number = 0
  @Input() valor2 : number = 0
  @Output() resultado = new EventEmitter<number>();
  resul : number = 0; 

  //
  sumar(){ this.resultado.emit(this.valor1 + this.valor2) }

  restar(){ this.resultado.emit(this.valor1 - this.valor2) }

  multiplicar(){ this.resultado.emit(this.valor1 * this.valor2) }

  dividir(){ this.resultado.emit(this.valor1 / this.valor2) }

  potenciar(){ this.resultado.emit(Math.pow(this.valor1,this.valor2)) }

  raiz() { this.resultado.emit(this.valor1 ** (1/this.valor2) ) }

  borrar(){ this.resultado.emit() }
}
