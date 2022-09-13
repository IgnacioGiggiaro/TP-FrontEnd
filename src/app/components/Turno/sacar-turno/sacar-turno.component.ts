import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {PacienteService} from "../../../services/paciente.service";
import {Paciente} from "../../../models/paciente";
import {Turno} from "../../../models/turno";
import {TurnoService} from "../../../services/turno.service";
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.css']
})
export class SacarTurnoComponent implements OnInit {

  listTurno: Turno[] = [];
  constructor(private _turnoService: TurnoService,
              private toastr: ToastrService) {}

  ngOnInit(): void {this.getTurno();
  }

  getTurno(){
    this._turnoService.getTurnos().subscribe(data=>{
      this.listTurno=(data);
      console.log(this.listTurno);
    }, error => {
      console.log(error);
    })
  }

  deleteTurnos(id:any){
    this._turnoService.deleteTurno(id).subscribe(data=>{
      this.toastr.error('Professional deleting successful', 'Professional deleted');
    })
  }

}
