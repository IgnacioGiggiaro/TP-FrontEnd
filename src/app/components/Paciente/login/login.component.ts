import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { PacienteService } from 'src/app/services/paciente.service';
import {ActivatedRoute} from "@angular/router";
import { Router } from '@angular/router';
import {Usuario} from "../../../models/usuario";

import {Turn} from "../../../models/turn";
import {Professional} from "../../../models/professional";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario!: Usuario;
  formulario: FormGroup;
  showError: boolean = false; // Propiedad para manejar el estado de error


  constructor(private _pacienteService: PacienteService,
              private aRouter: ActivatedRoute,
              ) {
    this.formulario = new FormGroup(
      {
        mail: new FormControl(),
        password: new FormControl()
      }
    )
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    this._pacienteService.login(this.formulario.value).subscribe(
      res => {
        this.usuario=(res);
        this.showError = false;
        localStorage.setItem('token',this.usuario.token);
        localStorage.setItem('master',String(this.usuario.master));
        console.log(this.usuario);
      }, error => {
        console.log(error)
        this.showError = true;
      }
    )

    }



}




