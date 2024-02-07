import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paciente} from "../models/paciente";
import {Usuario} from "../models/usuario";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = environment.route + 'Paciente/'
  url2 = environment.route + 'Paciente/login'

  constructor(private http: HttpClient) {
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.url)
  }

  eliminarPaciente(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPaciente(paciente: Paciente): Observable<any> {
    return this.http.post(this.url, paciente);
  }

  updatePaciente(id: string, paciente: Paciente): Observable<any> {
    return this.http.put(this.url + id, paciente);
  }

  obtenerPaciente(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  login(formValue: any): Observable<any> {
    return this.http.post(this.url2, formValue);
  }
}
