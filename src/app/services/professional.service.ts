import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Professional} from "../models/professional";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  url = environment.route + 'Professional/'

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

  getOS(id: string): Observable<any> {
    return this.http.get(this.url + id + '/OS');
  }

  deleteOS(id:string, idOS:string): Observable<any> {
    return this.http.delete(this.url + id + '/OS/' + idOS);
  }

  addOs(id:string, idOS:string): Observable<any> {
    return this.http.post(this.url + id + '/OS/' + idOS, null);
  }

  getPractice(id: string): Observable<any> {
    return this.http.get(this.url + id + '/Practice');
  }

  deletePractice(id:string, idPractice:string): Observable<any> {
    return this.http.delete(this.url + id + '/Practice/' + idPractice);
  }
  addPractice(id:string, idPractice:string): Observable<any> {
    return this.http.post(this.url + id + '/Practice/' + idPractice, null);
  }
}
