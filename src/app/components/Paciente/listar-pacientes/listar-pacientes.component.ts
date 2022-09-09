import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import {PacienteService} from "../../../services/paciente.service";
import {Paciente} from "../../../models/paciente";

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {
  listPacientes: Paciente[] = [];
  constructor(private _pacienteService: PacienteService,
              private toastr: ToastrService) { }

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
  eliminarPaciente(id: any) {
    this._pacienteService.eliminarPaciente(id).subscribe(data => {
      this.toastr.error('El paciente fue eliminado con exito' ,'Paciente Eliminado');
      this.obtenerPacientes();
    }, error => {
      console.log(error);
    })
  }

  formatDate(fecha: Date){
    return moment(fecha).utcOffset('0300').format('DD-MM-YYYY')

  }
}
