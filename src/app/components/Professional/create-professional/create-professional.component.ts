import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Professional } from 'src/app/models/professional';
import { ProfessionalService } from 'src/app/services/professional.service';

@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.css']
})
export class CreateProfessionalComponent implements OnInit {
  professionalForm: FormGroup;
  titulo = 'Create professional';
  id: string | null;
  token: string | null = null;
  master: string | null = null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _professionalService: ProfessionalService,
              private aRouter: ActivatedRoute) {
    this.professionalForm = this.fb.group({
        dni: ['', Validators.required],
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        telefono: ['', Validators.required],
        mail: ['', Validators.required],
        direccion: ['', Validators.required],
        fecha_nac: ['', Validators.required],
        matricula: ['', Validators.required],
      }
    )
    this.id = this.aRouter.snapshot.paramMap.get('id');}

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null)
    {
      this.token= localStorage.getItem('token');
    }
    else{
      this.token = null;
    }
    if(localStorage.getItem('master')!=null)
    {
      this.master= localStorage.getItem('master');;
    }
    else{
      this.master = null;
    }

    this.esEditar();
  }



  createProfessional(){

    const PROFESSIONAL: Professional = {
      dni:this.professionalForm.get('dni')?.value,
      nombre: this.professionalForm.get('nombre')?.value,
      apellido: this.professionalForm.get('apellido')?.value,
      telefono: this.professionalForm.get('telefono')?.value,
      mail: this.professionalForm.get('mail')?.value,
      direccion: this.professionalForm.get('direccion')?.value,
      fecha_nac: this.professionalForm.get('fecha_nac')?.value,
      matricula: this.professionalForm.get('matricula')?.value,
    }
    console.log(PROFESSIONAL);
    this._professionalService.createProfessional(PROFESSIONAL).subscribe(data=> {
      this.toastr.success('Professional registrado con exito ', 'Professional Registrado!');
      this.router.navigate(['/list-professional']);
    }, error => {
      console.log(error);
      this.professionalForm.reset();
    })
  }

  updateProfessional(id:string){
    const PROFESSIONAL: Professional = {
      dni:this.professionalForm.get('dni')?.value,
      nombre: this.professionalForm.get('nombre')?.value,
      apellido: this.professionalForm.get('apellido')?.value,
      telefono: this.professionalForm.get('telefono')?.value,
      mail: this.professionalForm.get('mail')?.value,
      direccion: this.professionalForm.get('direccion')?.value,
      fecha_nac: this.professionalForm.get('fecha_nac')?.value,
      matricula: this.professionalForm.get('matricula')?.value
    }
    console.log(PROFESSIONAL);
    this._professionalService.updateProfessional(id, PROFESSIONAL).subscribe( data=> {
      this.toastr.success('Professional actualizado con exito ', 'Professional Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.professionalForm.reset();
    })
  }
  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar professional';
      this._professionalService.getProfessional(this.id).subscribe(data => {
        this.professionalForm.patchValue({
          dni: data.dni,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          mail: data.mail,
          direccion: data.direccion,
          matricula: data.matricula,
        })
      })
    }
  }


}
