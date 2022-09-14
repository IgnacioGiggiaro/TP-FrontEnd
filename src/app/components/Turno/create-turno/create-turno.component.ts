import { Component, OnInit} from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";
import {Turno} from '../../../models/turno'
import {TurnoService} from "../../../services/turno.service";
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
  turnos: number[]=[];

  fechaForm: FormGroup;
  id:string|null;
  co!: number;
  constructor(
    private fb:FormBuilder,
    private _profService: ProfessionalService,
    private aRouter: ActivatedRoute,
    private _turnoService : TurnoService,
    private toastr: ToastrService) {
    this.fechaForm=this.fb.group({
      fecha:['',Validators.required],
    })
    this.id=this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
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
    const fecha =(this.fechaForm.get('fecha')?.value)+'T03:00:00.000Z';
    if (this.id!=null) {
      const turno: Turno = {
        dia: fecha,
        hsDesde: t,
        professional: this.id,
        obraSocial :"63164411a7ba027b1ad919dd",
        paciente: "631a2c69ba6f2ce711d99ee5",
        practica: "6318f6dabbc30706c1493ecd"
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
}
