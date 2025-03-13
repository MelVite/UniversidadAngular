import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto = {
    descripcion: 'Nuevo Producto',
    precio: 100,
  }

  //Con método:
  productoInfo(){
    return `Descripción: ${this.producto.descripcion}, Precio: $${this.producto.precio}`
  }
}
