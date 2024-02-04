import { Component, OnInit } from '@angular/core';
import {ProfessionalService} from "../../../services/professional.service";
import { ActivatedRoute, Router } from '@angular/router';
import {ToastrService} from "ngx-toastr";
import {Practice} from "../../../models/practice";
import {PracticeService} from "../../../services/practice.service";

interface PracticeWithFlag extends Practice {

  flag: number;
}

@Component({
  selector: 'app-add-practice',
  templateUrl: './add-practice.component.html',
  styleUrls: ['./add-practice.component.css']
})
export class AddPracticeComponent implements OnInit {
  listPractice: PracticeWithFlag[]=[];
  listPracticeWithFlag: PracticeWithFlag[]=[];
  listId: Set<string> = new Set();
  id: string | null;
  i:number;
  constructor(
    private _practiceService: PracticeService,
    private _pfService: ProfessionalService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService

  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerPractice();
    this.getPracticeProf();
  }

  obtenerPractice() {
    this._practiceService.getPractices().subscribe(data => {
      this.listPractice = data.map(practice => ({ ...practice, flag: 0 }));
      console.log(this.listPractice);
    }, error => {
      console.log(error);
    });
  }

  getPracticeProf() {
    this._pfService.getPractice(String(this.id)).subscribe(
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
    console.log("listPractice:", this.listPractice);

    this.listPractice.forEach(practice => {
      const practiceIdAsString = practice._id;
      console.log("Checking for practiceId:", practiceIdAsString);

      // Comparamos utilizando Array.from y includes
      practice.flag = Array.from(this.listId).includes(String(practiceIdAsString)) ? 1 : 0;
    });

    console.log("After updateFlagValues:", this.listPractice);
  }

  deletePractice(id:any,idPractice:any){
    this._pfService.deletePractice(id,idPractice).subscribe(data => {
      this.toastr.error('La Practica fue Removida con exito' ,'Practica Removida');
      this.getPracticeProf();
    }, error => {
      console.log(error);
    })

  }
  addPractice(id:any,idPractice:any){
    this._pfService.addPractice(id,idPractice).subscribe(data => {
      this.toastr.success('La Practica fue agregada con exito' ,'Practica agregada');
      this.getPracticeProf();
    }, error => {
      console.log(error);
    })

  }


}
