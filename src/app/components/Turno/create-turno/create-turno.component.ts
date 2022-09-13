import { Component, OnInit } from '@angular/core';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as moment from "moment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-create-turno',
  templateUrl: './create-turno.component.html',
  styleUrls: ['./create-turno.component.css']
})
export class CreateTurnoComponent implements OnInit {
  fechaForm: FormGroup;
  id:string|null;
  constructor(
    private fb:FormBuilder,
    private _profService: ProfessionalService,
              private aRouter: ActivatedRoute) {
    this.fechaForm=this.fb.group({
      fecha:['',Validators.required],
    })
    this.id=this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  getTurnosPosibles(){
    const fecha = this.fechaForm.get('fecha')?.value;
    console.log(fecha);
    if(this.id!==null){
      this._profService.retrieveProfessional(this.id, fecha).subscribe(
        res =>{
          console.log(fecha);
          const turno=(res);
          console.log(turno);
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

}
