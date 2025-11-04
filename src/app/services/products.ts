import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export class Products {
  
}
