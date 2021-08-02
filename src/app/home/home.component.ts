import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { CategoriaService } from '../service/categoria.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pesquisa: string
  listaCategoria: Categoria[]
  id: number

  constructor(private router: Router, private temaService: TemaService,private categoriaService: CategoriaService) { }

  ngOnInit(){

    window.scroll(0,0)
    this.findAllCategoria()
 
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categoria[])=>{
        this.listaCategoria = resp
    })
  }

  pesquisar(){
    this.router.navigate(['/tema'])
    this.temaService.ok = true
    this.temaService.pesquisa = this.pesquisa
  }

  verCategoria(event: any){
    this.id = event.target.value 
    this.temaService.ok = false
    this.temaService.pesquisa = ''
    this.router.navigate(['/tema/categoria',this.id])
  }

}
