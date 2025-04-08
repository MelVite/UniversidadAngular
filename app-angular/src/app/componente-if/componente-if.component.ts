import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  standalone: true,
  imports: [],
  templateUrl: './componente-if.component.html',
  styleUrl: './componente-if.component.css'
})
export class ComponenteIfComponent {
  subtitulo: string = 'Directiva @if';
  arroba: string = '@';
  isAutenticado: boolean = false;

  cambiarAutentificacion(): void { //Este método no regresa nada x lo que es de tipo void
    //Se invierte el valor de autentificado
    this.isAutenticado = !this.isAutenticado;
  }
}
