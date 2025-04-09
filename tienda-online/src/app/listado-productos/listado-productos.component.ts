import { Component } from '@angular/core';
import { ProductoComponent } from "./producto/producto.component";
import { Producto } from './producto/producto.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  alertaProducto: string = 'Ingresar Producto';
  alertaPrecio: string = 'Ingresar Precio';


  productos: Producto[] = [
    new Producto( 'Camisa Dandadan', 30.0),
    new Producto( 'Chamarra Jujutsu Kaisen', 150.0),
    new Producto( 'Corbata punk', 8.50)
  ];

  descripcionInput: string = '';
  precioInput: number | null = null;

  agregarProducto() {
    if(this.descripcionInput === '' && this.alertaPrecio === null && this.precioInput === 0){
      return this.alertaPrecio;
    }
  }
}
