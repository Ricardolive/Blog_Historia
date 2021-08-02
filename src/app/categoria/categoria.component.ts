import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  listaCategoria: Categoria[]
  id:number

  constructor(private categoriaService: CategoriaService, private router: Router, private temaService: TemaService) { }

  ngOnInit(){

    window.scroll(0,0)

    this.findAllCategoria()
  }


  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  verTemas(event: any){
    this.id= event.target.value
    this.temaService.ok = false
    this.router.navigate(['/tema/categoria',this.id])
  }



}
