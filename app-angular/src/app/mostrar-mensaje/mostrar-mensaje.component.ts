import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
  mensaje: string = ''; //El valor por default es cadena vacía

  //Método para mostrar mensaje al oprimir el botón mostrar mensaje
  mostrarMensaje() {
    this.mensaje = '¡Hola, has hecho click en el botón Mostrar Mensaje!';
  }

  //Método para resetear el mensaje
  resetearMensaje() {
    //Reiniciar el mensaje
    this.mensaje = ''; //Se reasigna la propiedad a cadena vacía
  }
}
