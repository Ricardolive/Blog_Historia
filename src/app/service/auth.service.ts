import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: UserLogin = new UserLogin()

  constructor( private http: HttpClient) { }


  logar(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://bloghistoriagg.herokuapp.com/usuarios/logar',userLogin)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://bloghistoriagg.herokuapp.com/usuarios/cadastrar',user)
  }


  logado(){
    let ok: boolean = false;

    if(environment.token != ''){
        ok = true
    }
      return ok;
  }

  admin(){
    let adm: boolean = false;

    if(environment.tipo == 'adm'){
      adm = true
    }
      return adm;
     
  }





}
