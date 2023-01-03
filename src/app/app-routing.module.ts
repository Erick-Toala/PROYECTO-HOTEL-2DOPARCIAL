import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HabitacionComponent } from './components/habitacion/habitacion.component';
import { LoginComponent } from './components/login/login.component';
import { MantenimientoComponent } from './components/mantenimiento/mantenimiento.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';



//se establecen las rutas para que cargue el componente correspondiente en la misma magina sin tener que recargar
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gestion',
    component: HabitacionComponent
  },
  {
    path: 'tienda',
    component: TiendaComponent
  },
  {
    path: 'mantenimiento',
    component: MantenimientoComponent
  },
  {
    path: 'reportes',
    component: ReportesComponent
  },
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'clientes',
    component: ClientesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
