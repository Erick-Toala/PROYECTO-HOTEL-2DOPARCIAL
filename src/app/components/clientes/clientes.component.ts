import { Component } from '@angular/core';
import { CargarScriptsService } from './../../cargar-scripts.service';
import { ClientesService } from '../../servicios/clientes.service';
import { Clientes } from '../../models/clientes';

//import clientesJson from 'src/assets/json/clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent {
  clientes: Clientes[] = [];
  //Clientes: any = clientesJson;

  constructor(
    private _CargaScripts:CargarScriptsService,
    public clientesService: ClientesService
    )
  {
    _CargaScripts.Carga(["main"]);
  }
  ngOnInit(){
    this.clientes = this.clientesService.getClientes();
  }
  addCliente(newDocumento: HTMLInputElement, 
    newNroDocumento: HTMLInputElement,
    newNombre: HTMLInputElement,
    newApellido: HTMLInputElement,
    newCorreo: HTMLInputElement){
    console.log('adding...', 
      newDocumento.value, 
      newNroDocumento.value, 
      newNombre.value,
      newApellido.value, 
      newCorreo.value);
    this.clientesService.addCliente({
      documento: newDocumento.value,
      nroDocumento: newNroDocumento.value,
      nombre: newNombre.value,
      apellido: newApellido.value, 
      correo: newCorreo.value,
    });
    newDocumento.value='';
    newNroDocumento.value='';
    newNombre.value='';
    newApellido.value='';
    newCorreo.value='';
    newDocumento.focus();
    return false;
  }
  deleteCliente(clientes: Clientes){
    if(confirm('Estás seguro que deseas eliminar este registro?')){
      this.clientesService.deleteCliente(clientes);
    }
  }
}
