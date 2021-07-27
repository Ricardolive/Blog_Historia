import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/app/model/Postagem';
import { Tema } from 'src/app/model/Tema';
import { PostagemService } from 'src/app/service/postagem.service';
import { TemaService } from 'src/app/service/tema.service';

@Component({
  selector: 'app-postagem-create',
  templateUrl: './postagem-create.component.html',
  styleUrls: ['./postagem-create.component.css']
})
export class PostagemCreateComponent implements OnInit {

  listaTemas: Tema[]
  idTema: number
  postagem: Postagem = new Postagem()
  tema: Tema = new Tema()

  constructor(
              private temaService: TemaService,
              private postagemService: PostagemService
              ) { }

  ngOnInit(){

    this.findAllTema()
  }

  findAllTema(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }



  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  cadastrar(){

    this.postagem.tema = this.tema
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
    })

  }

}
