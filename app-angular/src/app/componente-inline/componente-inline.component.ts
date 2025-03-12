import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  standalone: true,
  imports: [],
  template: `
    <h1>{{tituloComponenteInline}}</h1>
    <p>Fuente más grande de 2rem</p>
  `,
  styles: `
    h1 {
      color: blue;
    }
    p {
      font-size: 2rem;
    }
  `
})
export class ComponenteInlineComponent {
  tituloComponenteInline = 'Componente Inline';
}
