import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAllCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>('https://bloghistoriagg.herokuapp.com/categorias')
  }

  getByIdCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://bloghistoriagg.herokuapp.com/categorias/id/${id}`)
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>('https://bloghistoriagg.herokuapp.com/categorias',categoria)
  }

  putCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>('https://bloghistoriagg.herokuapp.com/categorias',categoria)
  }

  deleteCategoria(id: number){
    return this.http.delete<Categoria>(`https://bloghistoriagg.herokuapp.com/categorias/delete/${id}`)
  }


}
