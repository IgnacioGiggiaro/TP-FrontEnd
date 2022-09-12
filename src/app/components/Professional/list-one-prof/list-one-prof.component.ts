import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {Professional} from "../../../models/professional";
import {ProfessionalService} from "../../../services/professional.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-list-one-prof',
  templateUrl: './list-one-prof.component.html',
  styleUrls: ['./list-one-prof.component.css']
})
export class ListOneProfComponent implements OnInit {

  profForm: FormGroup;
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _profService: ProfessionalService,
              private aRouter: ActivatedRoute) {
    this.profForm = this.fb.group({

      nombre: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');}

  ngOnInit(): void { this.getProfessionalByID(this.id)
  }

  getProfessionalByID(_id: any) {
    if (_id !== null) {
      this._profService.getProfessional(_id).subscribe(
        res => {
          console.log(res)
          this.profForm.setValue({
            nombre: res.nombre+res.apellido
          })
        }, error => {
          console.log(error)
        }
      )
    }
  }


}


