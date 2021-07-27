import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/Categoria';
import { Tema } from 'src/app/model/Tema';
import { CategoriaService } from 'src/app/service/categoria.service';
import { TemaService } from 'src/app/service/tema.service';


@Component({
  selector: 'app-tema-create',
  templateUrl: './tema-create.component.html',
  styleUrls: ['./tema-create.component.css']
})
export class TemaCreateComponent implements OnInit {

  tema: Tema = new Tema()
  listaCategoria: Categoria[]
  idCategoria: number
  categoria: Categoria = new Categoria()

  constructor(
    private categoriaService: CategoriaService,
    private temaService: TemaService) { }

  ngOnInit(){

    this.findAllCategoria()

  }


  numCategoria(event: any){
    this.idCategoria = event.target.value
  }

  findAllCategoria(){
   this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
     this.listaCategoria = resp
   })
  }

  findByIdCategoria(){

    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria)=>{
      this.categoria= resp

    })
  }

  cadastrar(){

    this.tema.categoria = this.categoria
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema Cadastrado com sucesso')
      this.tema = new Tema()
    })
  }


}
