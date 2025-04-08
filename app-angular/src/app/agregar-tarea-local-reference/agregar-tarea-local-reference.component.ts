import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea-local-reference',
  standalone: true,
  imports: [],
  templateUrl: './agregar-tarea-local-reference.component.html',
  styleUrl: './agregar-tarea-local-reference.component.css'
})
export class AgregarTareaLocalReferenceComponent {
  sintaxis: string =  '<elemento #nombreReferencia></elemento>';
  tarea: string = '';

  agregarTarea(nuevaTarea: string): void {
    this.tarea = nuevaTarea;
  }
}
