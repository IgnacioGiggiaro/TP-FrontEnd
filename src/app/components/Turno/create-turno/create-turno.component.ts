import { Component, OnInit} from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";
import {Turno} from '../../../models/turno'
import {Turn} from "../../../models/turn"
import {TurnoService} from "../../../services/turno.service";
import {ObraSocial} from "../../../models/obraSocial";
import {ObraSocialService} from "../../../services/obra-social.service";
import {Practice} from "../../../models/practice";
import {PracticeService} from "../../../services/practice.service";
import {Paciente} from "../../../models/paciente";
import {PacienteService} from "../../../services/paciente.service";
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import * as moment from "moment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-create-turno',
  templateUrl: './create-turno.component.html',
  styleUrls: ['./create-turno.component.css']
})
export class CreateTurnoComponent implements OnInit {
  turnos: Turn[]=[];
  listOs: ObraSocial[]=[];
  listPrac:Practice[]=[];
  listPaciente: Paciente[]=[];

  fechaForm: FormGroup;
  id:string|null;
  co!: number;
  osid!:string;
  pid!:string;
  pacId!:string;
  constructor(
    private fb:FormBuilder,
    private _profService: ProfessionalService,
    private _practiceService:PracticeService,
    private aRouter: ActivatedRoute,
    private _turnoService : TurnoService,
    private _osService: ObraSocialService,
    private toastr: ToastrService,
    private _pacienteService:PacienteService) {
    this.fechaForm=this.fb.group({
      fecha:['',Validators.required],
    })
    this.id=this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {this.getObraSociales();
    this.getPractica();
    this.getPaciente();
  }


  getTurnosPosibles(){
    const fecha =this.formatDate(this.fechaForm.get('fecha')?.value);
    console.log(fecha);
    if(this.id!==null){
      this._profService.retrieveProfessional(this.id, fecha).subscribe(
        res =>{
          this.turnos=(res);
          console.log(this.turnos);
        }, error =>{
          console.log(error);
          this.fechaForm.reset();
        }

      )
    }
  }
  formatDate(fecha: string){
    return moment(fecha).utcOffset('0300').format('MM-DD-YY')

  }


  createTurno(t: number) {
    console.log(t);
    console.log(this.osid);
    console.log(this.pid);
    const fecha =this.formatDate(this.fechaForm.get('fecha')?.value);
    if (this.id!=null) {
      const turno: Turno = {
        dia: fecha,
        hsDesde: t,
        professional: this.id,
        obraSocial :this.osid,
        paciente: this.pacId,
        practica: this.pid
      }
      console.log(turno);
      this._turnoService.createTurno(turno).subscribe(res=>{
        console.log(res),
          this.toastr.success('The Turn has benn created successfully!', 'Turn Created!')
          this.turnos=[];
      }, error => {
        console.log(error)
      })
    }
  }
  decimalAHora(hs:number) {
    let horas = Math.floor(hs), // Obtenemos la parte entera
      restoHoras = Math.floor(hs % 1 * 100), // Obtenemos la parde decimal
      decimalMinutos = restoHoras * 60 / 100, // Obtenemos los minutos expresado en decimal

      minutos = Math.floor(decimalMinutos), // Obtenemos la parte entera
      restoMins = Math.floor(decimalMinutos % 1 * 100), // Obtenemos la parde decimal
      segundos = Math.floor(restoMins * 60 / 100); // Obtenemos los segundos expresado en entero

    return (`${('00'+horas).slice(-2)}:${('00'+minutos).slice(-2)}`);
  }

  getObraSociales(){
    this._osService.getOSs().subscribe(data=>{
      this.listOs = (data);
      console.log(this.listOs);
    }, error => {
      console.log(error);
    })
  }

  getPractica(){
    this._practiceService.getPractices().subscribe(data=>{
      this.listPrac = (data);
      console.log(this.listPrac);
    }, error => {
      console.log(error);
    })
  }
  getPaciente(){
    this._pacienteService.getPacientes().subscribe(data=>{
      this.listPaciente=(data);
      console.log(this.listPaciente);
    }, error=>{
      console.log(error)
    })
  }
  update({e}: { e: any }){
    this.osid = e.target.value;
    console.log(this.osid)
  }
  updatePrac({e}: { e: any }){
    this.pid = e.target.value;
    console.log(this.pid)
  }
  updatePac({e}: { e: any }){
    this.pacId = e.target.value;
    console.log(this.pacId)
  }
}



