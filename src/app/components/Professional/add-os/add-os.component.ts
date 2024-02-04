import { Component, OnInit} from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";
import {Turno} from '../../../models/turno'
import {Turn} from "../../../models/turn"
import {TurnoService} from "../../../services/turno.service";
import { ActivatedRoute, Router } from '@angular/router';
import {ObraSocial} from "../../../models/obraSocial";
import {ObraSocialService} from "../../../services/obra-social.service";
import {ToastrService} from "ngx-toastr";
import {Professional} from "../../../models/professional";

@Component({
  selector: 'app-add-os',
  templateUrl: './add-os.component.html',
  styleUrls: ['./add-os.component.css']
})
export class AddOsComponent implements OnInit {
  listOs: ObraSocial[]=[];
  listId: string[]=[];
  id: string | null;
  constructor(
    private _osService: ObraSocialService,
    private _pfService: ProfessionalService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService

  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    //this.getObrasSociales();
    this.getObrasSocialesProf()

  }

  getObrasSocialesProf() {
    this._pfService.getOS(String(this.id)).subscribe(
      data => {
        console.log(data);
        this.listId = data; // No necesitas los paréntesis aquí
        this.getObrasSociales(this.listId);
      },
      error => {
        console.log(error);
      }
    );
  }

  getObrasSociales(listId: string[]) {
    // Limpiar el array existente antes de asignar nuevos valores
    this.listOs = [];

    // Iterar sobre cada id y obtener la obra social correspondiente
    listId.forEach((id: string) => {
      this._osService.getOS(id).subscribe(
        osData => {
          this.listOs.push(osData);
        },
        osError => {
          console.log(osError);
        }
      );
    });
  }
  deleteOS(id:any,idOS:any){
    this._pfService.deleteOS(id,idOS).subscribe(data => {
      this.toastr.error('La Obra Social fue Removida con exito' ,'Obra Social Removida');
      this.getObrasSocialesProf();
    }, error => {
      console.log(error);
    })

  }


/*
  getObrasSocialesProf() {
    this._pfService.getOS(String(this.id)).subscribe(
      data=>{
        console.log(data);
        this.listId= (data);
        this.getObrasSociales(this.listId);
      }, error => {
        console.log(error)
      }
    )
  }

  getObrasSociales(listId:string[]){
    this.listOs[0] = this._osService.getOS(this.listId[0])


}

*/





}
