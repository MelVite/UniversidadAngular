import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  standalone: true,
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  texto: string = '';

  actualizarTexto(evento: Event) {
    const elementoImput = evento.target as HTMLInputElement;
    this.texto = elementoImput.value;
  }

}
