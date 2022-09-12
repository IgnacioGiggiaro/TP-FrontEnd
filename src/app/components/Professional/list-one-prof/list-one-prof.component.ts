import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-list-one-prof',
  templateUrl: './list-one-prof.component.html',
  styleUrls: ['./list-one-prof.component.css']
})
export class ListOneProfComponent implements OnInit {

  _id: string | null;


  constructor(private _professionalService: ProfessionalService,
              private aRouter: ActivatedRoute,
              public _prof: Professional) {
    this._id = this.aRouter.snapshot.paramMap.get('_id');
  }
  ngOnInit(): void {
    this.getProfessionalByID(this._id)
  }

  getProfessionalByID(_id: any){
    this._professionalService.getProfessional(_id).subscribe(
      res=>{
        console.log(res),
        this._prof=(res)
      }, error => {
        console.log(error)
      }
    )
  }
}
