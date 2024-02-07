import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Practice} from 'src/app/models/practice';
import {PracticeService} from 'src/app/services/practice.service';

@Component({
  selector: 'app-create-practice',
  templateUrl: './create-practice.component.html',
  styleUrls: ['./create-practice.component.css']
})
export class CreatePracticeComponent implements OnInit {
  practiceForm: FormGroup;
  titulo = 'Crear practice';
  id: string | null;
  token: string | null = null;
  master: string | null = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _practiceService: PracticeService,
              private aRouter: ActivatedRoute) {
    this.practiceForm = this.fb.group({

      nombre: ['', Validators.required],

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
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
    this.esEditar();
  }

  createPractice() {

    const PRACTICE: Practice = {
      nombre: this.practiceForm.get('nombre')?.value,

    }

    console.log(PRACTICE);
    this._practiceService.createPractice(PRACTICE).subscribe(data => {
      this.toastr.success('La practica fue registrada con exito!', 'Practica Registrado!');
      this.router.navigate(['/list-practice']);
    }, error => {
      console.log(error);
      this.practiceForm.reset();
    })


  }

  updatePractice(id: any) {
    const PRACTICE: Practice = {

      nombre: this.practiceForm.get('nombre')?.value,

    }

    console.log(PRACTICE);
    this._practiceService.updatePractice(id, PRACTICE).subscribe(data => {
      this.toastr.success('La práctica fue actualizada con exito!', 'Practica Registrada!');
      this.router.navigate(['/list-practice']);
    }, error => {
      console.log(error);
      this.practiceForm.reset();
    })
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar practica';
      this._practiceService.getPractice(this.id).subscribe(data => {
        this.practiceForm.patchValue({

          nombre: data.nombre,

        })
      })
    }
  }

}
