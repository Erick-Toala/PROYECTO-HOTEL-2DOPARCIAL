import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: Clientes[];

  constructor() {
    this.clientes=[];
  }

  getClientes(){
    if(localStorage.getItem('clientes') === null){
      return this.clientes;
    }else{
      this.clientes = JSON.parse(localStorage.getItem('clientes')!);
      return this.clientes;
    }
   }

   addCliente(cliente: Clientes){
    this.clientes.push(cliente);
    let clientes: Clientes[] = [];
    if(localStorage.getItem('clientes') === null){
      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    } else{

      clientes=JSON.parse(localStorage.getItem('clientes')!);

      clientes.push(cliente);
      localStorage.setItem('clientes', JSON.stringify(clientes));
    }
   }

   deleteCliente(clientes: Clientes){
    for(let i=0; i< this.clientes.length; i++){
      if (clientes == this.clientes[i]){
        this.clientes.splice(i, 1);
        localStorage.setItem('clientes',JSON.stringify(this.clientes));
      }
    }
   }
}
