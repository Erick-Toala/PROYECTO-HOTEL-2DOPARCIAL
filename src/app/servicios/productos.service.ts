import { Injectable } from '@angular/core';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Productos[];

  constructor() {
    this.productos=[];
  }

  getProductos(){
    if(localStorage.getItem('productos') === null){
      return this.productos;
    }else{
      this.productos = JSON.parse(localStorage.getItem('productos')!);
      return this.productos;
    }
   }

   addProductos(producto: Productos){
    this.productos.push(producto);
    let productos: Productos[] = [];
    if(localStorage.getItem('productos') === null){
      productos.push(producto);
      localStorage.setItem('productos', JSON.stringify(productos));
    } else{

      productos=JSON.parse(localStorage.getItem('productos')!);

      productos.push(producto);
      localStorage.setItem('productos', JSON.stringify(productos));
    }
   }

   deleteProductos(productos: Productos){
    for(let i=0; i< this.productos.length; i++){
      if (productos == this.productos[i]){
        this.productos.splice(i, 1);
        localStorage.setItem('productos',JSON.stringify(this.productos));
      }
    }
   }
}
