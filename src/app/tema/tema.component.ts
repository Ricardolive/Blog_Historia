import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Tema } from '../model/Tema';
import { CategoriaService } from '../service/categoria.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]
  pesquisa: string
  categoria: Categoria = new Categoria()
  pesqTema: boolean = true

  constructor( public temaService: TemaService, private route: ActivatedRoute, private categoriaService: CategoriaService, private router: Router) { }

  ngOnInit(){

    window.scroll(0,0)
   
    let id = this.route.snapshot.params['id']

    if(this.temaService.pesquisa != undefined && this.temaService.pesquisa != ''){
      this.findByTituloTema()
      this.pesqTema = true
    }else if( id != undefined){
        this.findByIdCategoria(id)
        this.pesqTema = false
    }else{
      this.pesqTema = true
      this.findAllTemas()
    }
 
  }

  findByIdCategoria(id: number){
    this.categoriaService.getByIdCategoria(id).subscribe((resp: Categoria)=>{
       this.listaTemas = resp.tema
       this.categoria = resp
    })
  }
 
 
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })

  }

  findByTituloTema(){

    if(this.pesquisa == '' && this.temaService.ok == false){
      this.findAllTemas()
    }
    else if(this.pesquisa != '' && this.temaService.ok == false){
      this.temaService.getAllTituloTema(this.pesquisa).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
    else if(this.temaService.pesquisa !='' && this.temaService.ok == true){
      this.temaService.getAllTituloTema(this.temaService.pesquisa).subscribe((resp: Tema[])=>{
          this.listaTemas = resp
      })
    }
    else{
      alert('Erro ao pesquisar tema')
      alert(`${this.pesquisa}`)
    }
  }

  onChange(){
     if(this.pesquisa == '' && this.temaService.ok == false){
 
       this.findAllTemas()
     }
  }

 
 




}
