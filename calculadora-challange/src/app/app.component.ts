import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraInterfazComponent } from './calculadora-interfaz/calculadora-interfaz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraInterfazComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora-challange';
}
