import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  listaPostagem: Postagem[]

  constructor(private postagemService: PostagemService, private temaService: TemaService, private router: Router) { }

  ngOnInit(){

    window.scroll(0,0)

    this.findAllPostagem()
  }

 findAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
        this.listaPostagem = resp
    })
 }

 verTemas(){

   this.temaService.pesquisa = ''
   this.temaService.ok = false
   this.router.navigate(['/tema'])
 }

}
