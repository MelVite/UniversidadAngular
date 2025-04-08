import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  standalone: true,
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
  arroba: string = '@';
  tareas: string[] = [
    'Aprender Angular',
    'Desarrollar una App',
    'Aprender TypeScript'
  ]

  //Método de agregar tarea
  agregarTarea(nuevaTarea: string): void {
    //Si contiene una tarea
    if(nuevaTarea) {
      this.tareas.push(nuevaTarea);
    }
  }

}
