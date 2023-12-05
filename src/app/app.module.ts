import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrearPacienteComponent } from './components/Paciente/crear-paciente/crear-paciente.component';
import { ListarPacientesComponent } from './components/Paciente/listar-pacientes/listar-pacientes.component';
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
import {LogoutButtonComponent} from "./components/boton-cerrar-sesion";
import {LoginButtonComponent} from "./components/boton-iniciar-sesion";
import {UserProfileComponent} from "./components/perfil-usuario";

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
    LogoutButtonComponent,
    LoginButtonComponent,
    UserProfileComponent
  ],
  imports: [
    MdbCarouselModule,
    BrowserModule,
    AuthModule.forRoot({
      domain: 'dev-h5ly1w0dacya3m3n.us.auth0.com',
      clientId: 'dZYDACE1y6YtFEYX1JMRp1lKAX9GvUfe',
      cacheLocation:'localstorage',
      useRefreshTokens:true,
      authorizationParams: {
        redirect_uri: 'http://localhost:4200'
      }
    }),
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
