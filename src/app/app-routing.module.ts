
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { PostagemComponent } from './postagem/postagem.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
    {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        component: HomeComponent
    },
    {
        path:'categoria',
        component: CategoriaComponent
    },
    {
        path: 'tema',
        component: TemaComponent
    },
    {
        path: 'postagem',
        component: PostagemComponent
    },
    {
        path: 'sobreNos',
        component: SobreNosComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
