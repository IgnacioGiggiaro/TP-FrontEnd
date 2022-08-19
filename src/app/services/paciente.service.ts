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
  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.url, paciente);
  }
  updatePaciente(id:string, paciente: Paciente): Observable<any> {
      return this.http.put(this.url + id, paciente);
  }

  obtenerPaciente(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
