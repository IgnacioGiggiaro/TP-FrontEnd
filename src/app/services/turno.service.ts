import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Turno} from "../models/turno";


@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  url = 'http://localhost:3000/Turno/'

  constructor(private http: HttpClient) { }

  getTurnos(): Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url)
  }
  deleteTurno(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createTurno(turno: Turno): Observable<any> {
    return this.http.post(this.url, turno);
  }
  updateTurno(id:string, turno: Turno): Observable<any> {
    return this.http.put(this.url + id, turno);
  }

  getTurno(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
