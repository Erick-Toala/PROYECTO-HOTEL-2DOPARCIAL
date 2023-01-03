import { Component } from '@angular/core';
import { MantenimientoService } from '../../servicios/mantenimiento.service';
import { Habitaciones } from '../../models/habitaciones';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  habitaciones: Habitaciones[] = [];
  constructor(
    public mantenimientoService: MantenimientoService,
    ){}

  ngOnInit(){
    this.habitaciones = this.mantenimientoService.getHabitaciones();
  }
}