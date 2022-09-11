import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import {ListarPacientesComponent} from "./components/Paciente/listar-pacientes/listar-pacientes.component";
import {CrearPacienteComponent} from "./components/Paciente/crear-paciente/crear-paciente.component";
import {MenuComponent} from "./components/Index/menu/menu.component";
import {CreatePracticeComponent} from "./components/Practice/create-practice/create-practice.component";
import {ListPracticeComponent} from "./components/Practice/list-practice/list-practice.component";
import {CreateOSComponent} from "./components/OS/create-os/create-os.component";

import {ListOSComponent} from "./components/OS/list-os/list-os.component";
import {ListProfessionalComponent} from "./components/Professional/list-professional/list-professional.component";
import {CreateProfessionalComponent} from "./components/Professional/create-professional/create-professional.component";

const routes: Routes = [
  //Menu Route
  {path: '', component:MenuComponent},

  //Paciente Routes
  {path: 'crear-paciente', component:CrearPacienteComponent },
  {path: 'editar-paciente/:id', component:CrearPacienteComponent },
  {path: 'list-paciente', component:ListarPacientesComponent },

  //Practice Routes
  {path: 'create-practice', component:CreatePracticeComponent },
  {path: 'editar-practice/:id', component: CreatePracticeComponent},
  {path: 'list-practice', component:ListPracticeComponent},

  //OS Routes
  {path:'create-os', component:CreateOSComponent},
  {path:'edit-os/:id', component:CreateOSComponent},
  {path:'list-os', component:ListOSComponent},

  //Prof Routes
  {path:'create-professional', component:CreateProfessionalComponent},
  {path:'edit-professional/:id', component:CreateProfessionalComponent},
  {path:'list-professional', component:ListProfessionalComponent},

  //Default Route
  {path:'**', redirectTo: '', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
