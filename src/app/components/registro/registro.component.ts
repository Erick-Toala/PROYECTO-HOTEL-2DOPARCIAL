import { Component } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-registro', 
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  constructor(
    private _CargaScripts:CargarScriptsService,
    public usuariosService: UsuariosService,
    )
  {
    _CargaScripts.Carga(["formulario"]);
  }

//metodo para añadir usuarios
  addUsuario( //recibe como parametros los datos del formulario HTML de registro
    newUsuario: HTMLInputElement, 
    newNombre: HTMLInputElement, 
    newContrasena: HTMLInputElement, 
    newCorreo: HTMLInputElement, 
    newTelefono: HTMLInputElement)
    {
    console.log('adding...', 
        newUsuario.value, 
        newNombre.value, 
        newContrasena.value, 
        newCorreo.value, 
        newTelefono.value);
    this.usuariosService.addUsuarios({
        usuario: newUsuario.value,
        nombre: newNombre.value,
        contrasena: newContrasena.value,
        correo: newCorreo.value, 
        telefono: newTelefono.value,
    });
    return false;
  }
}
