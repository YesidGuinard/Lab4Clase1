import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BienvenidoComponent} from "./bienvenido/bienvenido.component";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {EjerciciosComponent} from "./ejercicios/ejercicios.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ejercicios', component: EjerciciosComponent},
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
