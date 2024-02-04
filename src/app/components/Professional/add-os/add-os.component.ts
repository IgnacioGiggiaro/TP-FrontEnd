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
import {Practice} from "../../../models/practice";

interface OSWithFlag extends ObraSocial {

  flag: number;
}

@Component({
  selector: 'app-add-os',
  templateUrl: './add-os.component.html',
  styleUrls: ['./add-os.component.css']
})
export class AddOsComponent implements OnInit {
  listOs: OSWithFlag[]=[];
  listId: Set<string> = new Set();
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
    this.obtenerObrasSociales();
    this.getObrasSocialesProf()

  }

  obtenerObrasSociales() {
    this._osService.getOSs().subscribe(data => {
      this.listOs = data.map(practice => ({ ...practice, flag: 0 }));
      console.log(this.listOs);
    }, error => {
      console.log(error);
    });
  }

  getObrasSocialesProf() {
    this._pfService.getOS(String(this.id)).subscribe(
      data => {
        console.log(data);
        this.listId = data;
        this.updateFlagValues();
      },
      error => {
        console.log(error);
      }
    );
  }

  updateFlagValues() {
    console.log("listId:", this.listId);
    console.log("listPractice:", this.listOs);

    this.listOs.forEach(os => {
      const practiceIdAsString = os._id;
      console.log("Checking for practiceId:", practiceIdAsString);

      // Comparamos utilizando Array.from y includes
      os.flag = Array.from(this.listId).includes(String(practiceIdAsString)) ? 1 : 0;
    });

    console.log("After updateFlagValues:", this.listOs);
  }
  deleteOS(id:any,idOS:any){
    this._pfService.deleteOS(id,idOS).subscribe(data => {
      this.toastr.error('La Obra Social fue Removida con exito' ,'Obra Social Removida');
      this.getObrasSocialesProf();
    }, error => {
      console.log(error);
    })

  }
  addOs(id:any,idOs:any){
    this._pfService.addOs(id,idOs).subscribe(data => {
      this.toastr.success('La Obra Social fue agregada con exito' ,'Obra Social agregada');
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
