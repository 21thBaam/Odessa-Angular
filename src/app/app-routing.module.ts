import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarAdministradorClienteComponent } from './consultar-administrador-cliente/consultar-administrador-cliente.component';
import { Page404Component } from './page404/page404.component';
import { AgregarEditarAdministradorClienteComponent } from './agregar-editar-administrador-cliente/agregar-editar-administrador-cliente.component';
import { ResumenAdministradorComponent } from './resumen-administrador/resumen-administrador.component';

const routes: Routes = [
  {
    path: 'consultar',
    component: ConsultarAdministradorClienteComponent
  },
  {
    path: '',
    redirectTo: 'consultar',
    pathMatch: 'full'
  },
  {
    path: 'alta',
    component: AgregarEditarAdministradorClienteComponent
  },
  {
    path: 'editar',
    component: AgregarEditarAdministradorClienteComponent
  },
  {
    path: 'resumen',
    component: ResumenAdministradorComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
