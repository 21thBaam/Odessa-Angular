import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConsultarAdministradorClienteComponent } from './consultar-administrador-cliente/consultar-administrador-cliente.component';
import { AdminUserPipePipe } from './pipes/admin-user-pipe.pipe';
import { Page404Component } from './page404/page404.component';
import { AgregarEditarAdministradorClienteComponent } from './agregar-editar-administrador-cliente/agregar-editar-administrador-cliente.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';
import { ResumenAdministradorComponent } from './resumen-administrador/resumen-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConsultarAdministradorClienteComponent,
    AdminUserPipePipe,
    Page404Component,
    AgregarEditarAdministradorClienteComponent,
    ModalDeleteComponent,
    ResumenAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
