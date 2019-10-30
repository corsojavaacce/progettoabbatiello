import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { utente } from 'C:/Users/Corso/Downloads/corso-Angular-Lezioni-master/corso-Angular-Lezioni-master/provosky/src/model/utente';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http: HttpClient) { }
  get():Observable<utente[]>{
    return this.http.get<utente[]>('http://localhost:8080/api/utente')
  }
  getById(id:number):Observable<utente>{
    return this.http.get<utente>('http://localhost:8080/api/utente?id='+id)
  }
  post(persona:utente):Observable<utente>{
    return this.http.post<utente>('http://localhost:8080/api/utente', persona )
  }
   delete(idutente:number):Observable<any>{
      return this.http.delete<any>('http://localhost:8080/api/utente/' + idutente)
   }
   update(id:number, persona:utente):Observable<utente>{ 
   return  this.http.patch<utente>('http://localhost:8080/api/utente/' + id, persona)
    }
}
