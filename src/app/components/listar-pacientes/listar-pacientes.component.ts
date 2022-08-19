import { Component, OnInit } from '@angular/core';
import {PacienteService} from "../../services/paciente.service";
import {Paciente} from "../../models/paciente";

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  listPacientes: Paciente[] = [];
  constructor(private _pacienteService: PacienteService) { }

  co:number = 0;
  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this._pacienteService.getPacientes().subscribe(data=>{
      this.listPacientes = (data);
      console.log(this.listPacientes);

    }, error => {
      console.log(error);
    })
  }
}
