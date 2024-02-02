import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Practice} from "../models/practice";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  url = environment.route + 'Practica/'

  constructor(private http: HttpClient) { }

  getPractices(): Observable<Practice[]>{
    return this.http.get<Practice[]>(this.url)
  }
  deletePractice(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createPractice(practice: Practice): Observable<any> {
    return this.http.post(this.url, practice);
  }
  updatePractice(id:string, practice: Practice): Observable<any> {
    return this.http.put(this.url + id, practice);
  }

  getPractice(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

}
