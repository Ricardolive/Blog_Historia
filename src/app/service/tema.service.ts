import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http : HttpClient) { }



getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('https://bloghistoriagg.herokuapp.com/temas')
}

getByIdTema(id: number): Observable<Tema>{
  return this.http.get<Tema>(`https://bloghistoriagg.herokuapp.com/temas/id/${id}`)
}

postTema(tema: Tema): Observable<Tema>{
  return this.http.post<Tema>('https://bloghistoriagg.herokuapp.com/temas',tema)
}

putTema(tema:Tema): Observable<Tema>{
  return this.http.put<Tema>('https://bloghistoriagg.herokuapp.com/temas',tema)
}

deleteTema(id: number){
  return this.http.delete<Tema>(`https://bloghistoriagg.herokuapp.com/temas/delete/${id}`)
}









}
