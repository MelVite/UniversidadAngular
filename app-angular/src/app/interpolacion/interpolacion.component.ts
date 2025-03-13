import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  standalone: true,
  imports: [],
  templateUrl: './interpolacion.component.html',
  styleUrl: './interpolacion.component.css'
})
export class InterpolacionComponent {
  titulo = 'Universidad Angular';
  usuario = {
    nombre: 'Melanio Vite',
    edad: 25
  };

  //Acceder a un método
  saludar() {
    return `Hola, ${this.usuario.nombre}`;
  }
}
