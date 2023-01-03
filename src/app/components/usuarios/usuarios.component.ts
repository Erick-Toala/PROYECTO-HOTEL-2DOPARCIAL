import { Component, OnInit, Input } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Usuarios } from '../../models/usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  //array para los usuarios que serán almacenados en el local storage
  @Input() usuarios: Usuarios[] = [];

  constructor(
    private _CargaScripts:CargarScriptsService,
    public usuariosService: UsuariosService,
    )
  {
    _CargaScripts.Carga(["main"]);
  }
  ngOnInit(){
    //se obtiene los usuarios
    this.usuarios = this.usuariosService.getUsuarios();
  }
  deleteUsuarios(usuarios: Usuarios){
    for(let i=0; i< this.usuarios.length; i++){
      if (usuarios == this.usuarios[i]){
        this.usuarios.splice(i, 1);
        localStorage.setItem('usuarios',JSON.stringify(this.usuarios));
      }
    }
  }
}
