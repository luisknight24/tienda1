import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { Products } from '../../services/products';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './productos.html',
  styleUrls: ['./productos.css'],
})
export class Productos {
  productos: Product[] = [];
  constructor(private product: Products) {
    this.productos = this.product.getProducts();
  }

  // Añade el producto al carrito (implementación mínima para evitar errores de template)
  agregarAlCarrito(producto: Product): void {
    // TODO: integrar con un servicio de carrito; por ahora guardamos en localStorage como ejemplo
    const carritoKey = 'carrito';
    const actual = JSON.parse(localStorage.getItem(carritoKey) || '[]');
    actual.push(producto);
    localStorage.setItem(carritoKey, JSON.stringify(actual));
    console.log('Producto agregado al carrito:', producto);
  }
}
