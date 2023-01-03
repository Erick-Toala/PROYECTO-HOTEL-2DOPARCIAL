import { Injectable } from '@angular/core';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
//creamos un servicio para los metodos de obtener, añadir y eliminar los usuarios
export class UsuariosService {

  //declaramos un array de tipo Usuarios (models Usuarios)
  usuarios: Usuarios[];

  constructor() { 
    //array vacio, pero guardará los datos para el local storage
    this.usuarios=[
    ];
  }
  //metodo para obtener los usuarios por el local storage
  getUsuarios(){
    if(localStorage.getItem('usuarios') === null){
      return this.usuarios;
    }else{
      this.usuarios = JSON.parse(localStorage.getItem('usuarios')!);
      return this.usuarios;
    }
  }
  //metodo para añadir los usuarios por el local storage
  addUsuarios(usuario: Usuarios){
    this.usuarios.push(usuario);
    let usuarios: Usuarios[] = [];
    if(localStorage.getItem('usuarios') === null){
      usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    } else{
      usuarios=JSON.parse(localStorage.getItem('usuarios')!);
      usuarios.push(usuario);
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }
  //metodo para eliminar los usuarios por el local storage
  deleteUsuarios(usuarios: Usuarios){
    for(let i=0; i< this.usuarios.length; i++){
      if (usuarios == this.usuarios[i]){
        this.usuarios.splice(i, 1);
        localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
      }
    }
  }
}