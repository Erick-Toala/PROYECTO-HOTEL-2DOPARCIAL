import { Injectable } from '@angular/core';
import { Habitaciones } from '../models/habitaciones';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  
  habitaciones: Habitaciones[];
  
  constructor() {
    this.habitaciones=[
      /*{numero: '001', detalle :'WIFI + BAÑO + TV + CABLE', precio :'30.00$', categoria :'Individual', piso :'PRIMER PISO'},
      {numero: '002', detalle :'WIFI + BAÑO + TV + CABLE', precio :'50.00$', categoria :'Doble', piso :'PRIMER PISO	'}
      */
    ];
   }

   getHabitaciones(){
    if(localStorage.getItem('habitaciones') === null){
      return this.habitaciones;
    }else{
      this.habitaciones = JSON.parse(localStorage.getItem('habitaciones')!);
      return this.habitaciones;
    }
   }

   addHabitaciones(habitacione: Habitaciones){
    this.habitaciones.push(habitacione);
    let habitaciones: Habitaciones[] = [];
    if(localStorage.getItem('habitaciones') === null){
      habitaciones.push(habitacione);
      localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
    } else{

      habitaciones=JSON.parse(localStorage.getItem('habitaciones')!);

      habitaciones.push(habitacione);
      localStorage.setItem('habitaciones', JSON.stringify(habitaciones));
    }
   }

   deleteHabitaciones(habitaciones: Habitaciones){
    for(let i=0; i< this.habitaciones.length; i++){
      if (habitaciones == this.habitaciones[i]){
        this.habitaciones.splice(i, 1);
        localStorage.setItem('habitaciones',JSON.stringify(this.habitaciones));
      }
    }
   }
}
