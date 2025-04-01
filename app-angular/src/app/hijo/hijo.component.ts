import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  //Diferencias entre un método GET normal de JS y un GETTER de TS

  private titulo = 'Titulo Componente Hijo de Getter vs Get'; //Este atributo es privado por lo que requiere un método publico para ser mostrado

  //Getter de TypeScript, para mostrarlo no se necesita utilizar () en el html ya que se comporta como una propiedad
  get mostrarTitulo(){
    return this.titulo;
  }

  //Método normal de JS, al ser un método este si debe ser llamado con el nombre del método y con ()
  getTitulo(){
    return this.titulo;
  }

}
