import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './components/Paciente/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/Paciente/listar-pacientes/listar-pacientes.component';
import { MenuComponent } from './components/Index/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearPacienteComponent,
    ListarPacientesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
