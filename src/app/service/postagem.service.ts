import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagem(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://bloghistoriagg.herokuapp.com/postagens')
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://bloghistoriagg.herokuapp.com/postagens/id/${id}`)
  }

  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://bloghistoriagg.herokuapp.com/postagens',postagem)
  }

  putPostagem(postagem:Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://bloghistoriagg.herokuapp.com/postagens',postagem)
  }

  deletePostagem(id: number){
    return this.http.delete<Postagem>(`https://bloghistoriagg.herokuapp.com/postagens/delete/${id}`)
  }


}
