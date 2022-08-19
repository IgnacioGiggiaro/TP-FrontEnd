import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paciente} from "../models/paciente";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = 'http://localhost:3000/Paciente/'

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url)
  }
}
