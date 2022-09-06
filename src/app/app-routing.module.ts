import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import {ListarPacientesComponent} from "./components/Paciente/listar-pacientes/listar-pacientes.component";
import {CrearPacienteComponent} from "./components/Paciente/crear-paciente/crear-paciente.component";
import {MenuComponent} from "./components/Index/menu/menu.component";
import {CreatePracticeComponent} from "./components/Practice/create-practice/create-practice.component";
import {ListPracticeComponent} from "./components/Practice/list-practice/list-practice.component";

const routes: Routes = [
  {path: '', component:MenuComponent},
  {path: 'crear-paciente', component:CrearPacienteComponent },
  {path: 'editar-paciente/:id', component:CrearPacienteComponent },
  {path: 'list-paciente', component:ListarPacientesComponent },
  {path: 'create-practice', component:CreatePracticeComponent },
  {path: 'list-practice', component:ListPracticeComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
