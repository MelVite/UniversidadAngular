import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
numeroA: number = 0;
numeroB: number = 0;
resultado: number = 0;

  sumar() {
    this.resultado = this.numeroA + this.numeroB;
  }

}
