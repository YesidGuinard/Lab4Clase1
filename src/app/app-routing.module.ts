import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BienvenidoComponent} from "./bienvenido/bienvenido.component";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {EjerciciosComponent} from "./ejercicios/ejercicios.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ControlEntidadComponent} from "./componentes/control-entidad/control-entidad.component";

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ejercicio1', component: EjerciciosComponent},
  {path: 'paises/listado', component: ControlEntidadComponent},
  {path: 'dash', component: DashboardComponent},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {enableTracing:false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
