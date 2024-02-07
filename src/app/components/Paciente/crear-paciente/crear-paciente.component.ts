import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {Paciente} from 'src/app/models/paciente';
import {PacienteService} from 'src/app/services/paciente.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
  pacienteForm: FormGroup;
  titulo = 'Crear paciente';
  id: string | null;
  token: string | null = null;
  master: string | null = null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _pacienteService: PacienteService,
              private aRouter: ActivatedRoute) {
    this.pacienteForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      mail: ['', Validators.required],
      direccion: ['', Validators.required],
      fecha_nac: ['', Validators.required],
      password: ['', Validators.required],
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

  agregarPaciente() {

    const PACIENTE: Paciente = {
      dni: this.pacienteForm.get('dni')?.value,
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      mail: this.pacienteForm.get('mail')?.value,
      direccion: this.pacienteForm.get('direccion')?.value,
      fecha_nac: this.pacienteForm.get('fecha_nac')?.value,
      password: this.pacienteForm.get('password')?.value,
    }

    console.log(PACIENTE);
    this._pacienteService.guardarPaciente(PACIENTE).subscribe(data => {
      this.toastr.success('El paciente fue registrado con exito!', 'Paciente Registrado!');
      this.router.navigate(['/list-paciente']);
    }, error => {
      console.log(error);
      this.pacienteForm.reset();
    })


  }

  updatePaciente(id: any) {
    const PACIENTE: Paciente = {
      dni: this.pacienteForm.get('dni')?.value,
      nombre: this.pacienteForm.get('nombre')?.value,
      apellido: this.pacienteForm.get('apellido')?.value,
      telefono: this.pacienteForm.get('telefono')?.value,
      mail: this.pacienteForm.get('mail')?.value,
      direccion: this.pacienteForm.get('direccion')?.value,
      fecha_nac: this.pacienteForm.get('fecha_nac')?.value,
      password: this.pacienteForm.get('password')?.value,
    }
    this._pacienteService.updatePaciente(id, PACIENTE).subscribe(data => {
      this.toastr.success('El paciente fue actualizado con exito!', 'Paciente Registrado!');
      this.router.navigate(['/list-paciente']);
    }, error => {
      console.log(error);
      this.pacienteForm.reset();
    })
  }

  esEditar() {

    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._pacienteService.obtenerPaciente(this.id).subscribe(data => {
        this.pacienteForm.patchValue({
          dni: data.dni,
          nombre: data.nombre,
          apellido: data.apellido,
          telefono: data.telefono,
          mail: data.mail,
          direccion: data.direccion,
          password: data.password,
        })
      })
    }
  }

}
