import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'https://backend-deploy-j40e.onrender.com/persona/';

  constructor(private http: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.http.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.http.get<persona>(this.URL + `detail/${id}`);
  }

  /*public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }*/

  public update(id: number, Persona: persona): Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, Persona);
  }

 /* public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }*/

}
