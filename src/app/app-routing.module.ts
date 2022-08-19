import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import {ListarPacientesComponent} from "./components/listar-pacientes/listar-pacientes.component";
import {CrearPacienteComponent} from "./components/crear-paciente/crear-paciente.component";

const routes: Routes = [
  {path: '', component:ListarPacientesComponent},
  {path: 'crear-paciente', component:CrearPacienteComponent },
  {path: 'editar-paciente/:id', component:CrearPacienteComponent },
  {path:'**', redirectTo: '', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
