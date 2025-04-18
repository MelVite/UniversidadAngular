import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { InterpolacionComponent } from "./interpolacion/interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from "./hijo/hijo.component";
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludarComponent } from "./saludar/saludar.component";
import { ComponenteIfComponent } from "./componente-if/componente-if.component";
import { AgregarTareaLocalReferenceComponent } from "./agregar-tarea-local-reference/agregar-tarea-local-reference.component";
import { ComponenteForComponent } from "./componente-for/componente-for.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NuevoComponenteComponent, ComponenteInlineComponent, InterpolacionComponent, PadreComponent, HijoComponent, MostrarMensajeComponent, ReplicadorComponent, SaludarComponent, ComponenteIfComponent, AgregarTareaLocalReferenceComponent, ComponenteForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Universidad Angular';
}
