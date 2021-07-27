import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  listaPostagem: Postagem[]

  constructor(private postagemService: PostagemService) { }

  ngOnInit(){

    window.scroll(0,0)

    this.findAllPostagem()
  }

 findAllPostagem(){
    this.postagemService.getAllPostagem().subscribe((resp: Postagem[])=>{
        this.listaPostagem = resp
    })
 }

}
