import { Component } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
import { MantenimientoService } from '../../servicios/mantenimiento.service';
import { Habitaciones } from '../../models/habitaciones';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

  habitaciones: Habitaciones[] = [];
  
  constructor(
    private _CargaScripts:CargarScriptsService,
    public mantenimientoService: MantenimientoService,
    )
  {
    _CargaScripts.Carga(["main"]);
  }

  ngOnInit(){
    this.habitaciones = this.mantenimientoService.getHabitaciones();
  }
  
  addhabitacion(newNumero: HTMLInputElement, 
    newDetalle: HTMLInputElement,
    newPrecio: HTMLInputElement,
    newCategoria: HTMLInputElement,
    newPiso: HTMLInputElement){
    console.log('adding...', 
      newNumero.value, 
      newDetalle.value, 
      newPrecio.value,
      newCategoria.value, 
      newPiso.value);
    this.mantenimientoService.addHabitaciones({
      numero: newNumero.value,
      detalle: newDetalle.value,
      precio: newPrecio.value,
      categoria: newCategoria.value, 
      piso: newPiso.value,
    });
    newNumero.value='';
    newDetalle.value='';
    newPrecio.value='';
    newCategoria.value='';
    newPiso.value='';
    newNumero.focus();
    return false;
  }
  deleteHabitaciones(habitaciones: Habitaciones){
    if(confirm('Estás seguro que deseas eliminar este registro?')){
      this.mantenimientoService.deleteHabitaciones(habitaciones);
    }
  }
}
