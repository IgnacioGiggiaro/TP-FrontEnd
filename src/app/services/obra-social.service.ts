import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ObraSocial} from "../models/obraSocial";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ObraSocialService {
  url = environment.route + 'ObraSocial/'

  constructor(private http: HttpClient) {
  }

  getOSs(): Observable<ObraSocial[]> {
    return this.http.get<ObraSocial[]>(this.url);
  }

  deleteOS(_id: String): Observable<any> {
    return this.http.delete(`${this.url}/${_id}`);
  }

  createOS(os: ObraSocial): Observable<any> {
    return this.http.post(this.url, os);
  }

  updateOS(id: string, os: ObraSocial): Observable<any> {
    return this.http.put(this.url + id, os)
  }

  getOS(_id: String): Observable<any> {
    return this.http.get(`${this.url}/${_id}`)
  }

}
