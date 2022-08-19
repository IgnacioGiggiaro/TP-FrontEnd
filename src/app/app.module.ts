import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/listar-pacientes/listar-pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearPacienteComponent,
    ListarPacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
