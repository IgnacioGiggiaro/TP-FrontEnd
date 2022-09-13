import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Professional} from "../models/professional";


@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  url = 'http://localhost:3000/Professional/'

  constructor(private http: HttpClient) { }

  getProfessionals(): Observable<Professional[]>{
    return this.http.get<Professional[]>(this.url)
  }
  deleteProfessional(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  createProfessional(professional: Professional): Observable<any> {
    return this.http.post(this.url, professional);
  }
  updateProfessional(id:string, professional: Professional): Observable<any> {
    return this.http.put(this.url + id, professional);
  }

  getProfessional(id: string): Observable<Professional> {
    return this.http.get<Professional>(this.url + id);
  }
  retrieveProfessional(id:string, fecha:any): Observable<any>{
    return this.http.get(this.url+ id + '/' +fecha)
  }
}
