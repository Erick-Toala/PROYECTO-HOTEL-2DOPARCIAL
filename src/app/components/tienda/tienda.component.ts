import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Productos } from '../../models/productos';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {


  productos: Productos[] = [];
  
  constructor(
    //private _CargaScripts:CargarScriptsService,
    public productosService: ProductosService,
    )
  {
    //_CargaScripts.Carga(["main"]);
  }
  ngOnInit(){
    this.productos = this.productosService.getProductos();
  }

  addProductos(
    newProducto: HTMLInputElement, 
    newPrecio: HTMLInputElement,
    newCantidad: HTMLInputElement){
    console.log('adding...', 
      newProducto.value, 
      newPrecio.value,
      newCantidad.value);
    this.productosService.addProductos({
      producto: newProducto.value,
      precio: newPrecio.value,
      cantidad: parseFloat(newCantidad.value)
    });
    newProducto.value='';
    newPrecio.value='';
    newCantidad.value='';
    newProducto.focus();
    return false;
  }
  deleteProductos(productos: Productos){
    if(confirm('Estás seguro que deseas eliminar este registro?')){
      this.productosService.deleteProductos(productos);
    }
  }

}
