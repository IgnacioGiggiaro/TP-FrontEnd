import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as moment from "moment";
import {formatDate} from "@angular/common";
@Component({
  selector: 'app-list-one-prof',
  templateUrl: './list-one-prof.component.html',
  styleUrls: ['./list-one-prof.component.css']
})
export class ListOneProfComponent implements OnInit {
  professional!: Professional;
  id: string | null;
  constructor(

              private toastr: ToastrService,
              private _profService: ProfessionalService,
              private aRouter: ActivatedRoute) {

    this.id = this.aRouter.snapshot.paramMap.get('id');}

  ngOnInit(): void { this.getProfessionalByID(this.id);
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

  formatDate(fecha: Date){
    return moment(fecha).utcOffset('0300').format('YYYY')

  }
  edad(fecha: Date){
    let d=  new Date()

    return d.getFullYear()-parseInt(this.formatDate(fecha))
  }
}


