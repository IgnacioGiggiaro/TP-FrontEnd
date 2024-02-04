import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './components/Paciente/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/Paciente/listar-pacientes/listar-pacientes.component'
import { MenuComponent } from './components/Index/menu/menu.component';
import { CreatePracticeComponent } from './components/Practice/create-practice/create-practice.component';
import { ListPracticeComponent } from './components/Practice/list-practice/list-practice.component';

import { CreateOSComponent } from './components/OS/create-os/create-os.component';
import { ListOSComponent } from './components/OS/list-os/list-os.component';
import {CreateProfessionalComponent} from "./components/Professional/create-professional/create-professional.component";
import {ListProfessionalComponent} from "./components/Professional/list-professional/list-professional.component";
import { ListOneProfComponent } from './components/Professional/list-one-prof/list-one-prof.component';
import { CreateTurnoComponent } from './components/Turno/create-turno/create-turno.component';

import {MdbCarouselModule} from "mdb-angular-ui-kit/carousel";
import { LoginComponent } from './components/Paciente/login/login.component';
import { AddOsComponent } from './components/Professional/add-os/add-os.component';
import { AddPracticeComponent } from './components/Professional/add-practice/add-practice.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearPacienteComponent,
    ListarPacientesComponent,
    MenuComponent,
    CreatePracticeComponent,
    ListPracticeComponent,
    CreateOSComponent,
    ListOSComponent,
    CreateProfessionalComponent,
    ListProfessionalComponent,
    ListOneProfComponent,
    CreateTurnoComponent,
    LoginComponent,
    AddOsComponent,
    AddPracticeComponent,
  ],
  imports: [
    MdbCarouselModule,
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
