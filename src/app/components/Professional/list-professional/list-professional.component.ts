import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";
@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent implements OnInit {
  listProfessional: Professional[] = [];
  constructor(private _professionalService: ProfessionalService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {this.getProfessional();
  }

  getProfessional(){
    this._professionalService.getProfessionals().subscribe(data=>{
      this.listProfessional=(data);
      console.log(this.listProfessional);
    }, error => {
      console.log(error);
    })
  }

  deleteProfessional(id:any){
    this._professionalService.deleteProfessional(id).subscribe(data=>{
      this.toastr.error('Professional deleting successful', 'Professional deleted');
    })
  }

}
