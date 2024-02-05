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
import {Professional} from "../../../models/professional";


@Component({
  selector: 'app-create-turno',
  templateUrl: './create-turno.component.html',
  styleUrls: ['./create-turno.component.css']
})
export class CreateTurnoComponent implements OnInit {
  turnos: Turn[]=[];
  listOs: ObraSocial[]=[];
  listId: String[]=[];
  listId2: String[]=[];
  listPrac:Practice[]=[];
  listPaciente: Paciente[]=[];

  fechaForm: FormGroup;
  professional!:Professional;
  dayName: string;
  monthName: string;
  dayNumber: string;

  id:string|null;
  co!: number;
  osid!:string;
  pid!:string;
  pacId!:string;
  token: string | null = null;
  master: string | null = null;
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

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    {
      this.token= localStorage.getItem('token');
    }
    else{
      this.token = null;
    }
    if(localStorage.getItem('master')!=null)
    {
      this.master= localStorage.getItem('master');;
    }
    else{
      this.master = null;
    }
    this.getOS();
    this.getPractica();
    this.getPaciente();
    this.getProfessionalByID(this.id);

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

  getDayName(fecha: string) {
    return moment(fecha).utcOffset('0300').format('dddd');
  }

  getDayNumber(fecha: string) {
    return moment(fecha).utcOffset('0300').format('D');
  }

  getMonthName(fecha: string) {
    return moment(fecha).utcOffset('0300').format('MMMM');
  }

  assignValues(fecha: string) {
    this.dayName = this.getDayName(fecha);
    this.dayNumber = this.getDayNumber(fecha);
    this.monthName = this.getMonthName(fecha);
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
        paciente: String(localStorage.getItem('usuarioId')),
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

  getOS() {
    this._profService.getOS(String(this.id)).subscribe(
      data => {
        if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
          // Si es un array de strings, asigna a listId y continúa
          this.listId2 = data;
          console.log(this.listId2);
          this.getObraSociales();
        } else {
          console.error('Error: La respuesta de getOS no es un array de strings');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getObraSociales() {
    // Limpiar el array existente antes de asignar nuevos valores
    this.listOs = [];

    // Iterar sobre cada id y obtener la práctica correspondiente
    this.listId2.forEach(id => {
      this._osService.getOS(String(id)).subscribe(
        os => {
          this.listOs.push(os);
        },
        osError => {
          console.log(osError);
        }
      );
    });
  }


  getPractica() {
    this._profService.getPractice(String(this.id)).subscribe(
      data => {
        if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
          // Si es un array de strings, asigna a listId y continúa
          this.listId = data;
          console.log(this.listId);
          this.getPracticas();
        } else {
          console.error('Error: La respuesta de getPractice no es un array de strings');
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPracticas() {
    // Limpiar el array existente antes de asignar nuevos valores
    this.listPrac = [];

    // Iterar sobre cada id y obtener la práctica correspondiente
    this.listId.forEach(id => {
      this._practiceService.getPractice(String(id)).subscribe(
        practice => {
          this.listPrac.push(practice);
        },
        practiceError => {
          console.log(practiceError);
        }
      );
    });
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
  getProfessionalByID(_id: any) {
    if (_id !== null) {
      this._profService.getProfessional(_id).subscribe(
        res => {
          this.professional=(res);
          console.log(this.professional);
        }, error => {
          console.log(error)
        }
      )
    }
  }
}



