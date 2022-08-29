import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import {ListarPacientesComponent} from "./components/Paciente/listar-pacientes/listar-pacientes.component";
import {CrearPacienteComponent} from "./components/Paciente/crear-paciente/crear-paciente.component";
import {MenuComponent} from "./components/Index/menu/menu.component";

const routes: Routes = [
  {path: '', component:MenuComponent},
  {path: 'crear-paciente', component:CrearPacienteComponent },
  {path: 'editar-paciente/:id', component:CrearPacienteComponent },
  {path:'**', redirectTo: '', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
