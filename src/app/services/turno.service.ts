import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Turno} from '../models/turno';
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  url= environment.route + 'Turno/'
  constructor(private http: HttpClient) { }
  getTurnos(): Observable<Turno[]>{
    return this.http.get<Turno[]>(this.url);
  }

  deleteTurno(_id: String): Observable<any>{
    return this.http.delete(`${this.url}/${_id}`);
  }

  createTurno(t: Turno): Observable<any>{
    return this.http.post(this.url, t);
  }

  updateTurno(id: string, t: Turno): Observable<any>{
    return this.http.put(this.url + id, t)
  }
  getTurno(_id: String): Observable<any>{
    return this.http.get(`${this.url}/${_id}`)
  }
}
