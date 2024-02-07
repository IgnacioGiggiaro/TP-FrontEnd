import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ObraSocial} from "../../../models/obraSocial";
import {ObraSocialService} from "../../../services/obra-social.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.css']
})
export class ListProfessionalComponent implements OnInit {
  listProfessional: Professional[] = [];
  listOS: ObraSocial[] = [];
  token: string | null = null;
  master: string | null = null;

  constructor(private _professionalService: ProfessionalService,
              private _obraSocialService: ObraSocialService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = null;
    }
    if (localStorage.getItem('master') != null) {
      this.master = localStorage.getItem('master');
      ;
    } else {
      this.master = null;
    }


    this.getProfessional();
  }

  getProfessional() {
    this._professionalService.getProfessionals().subscribe(data => {
      this.listProfessional = (data);
      console.log(this.listProfessional);
    }, error => {
      console.log(error);
    })
  }

  deleteProfessional(id: any) {
    this._professionalService.deleteProfessional(id).subscribe(data => {
      this.toastr.error('Professional deleting successful', 'Professional deleted');
    })
  }

}
