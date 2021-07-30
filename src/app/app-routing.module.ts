
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaCreateComponent } from './create/categoria-create/categoria-create.component';
import { PostagemCreateComponent } from './create/postagem-create/postagem-create.component';
import { TemaCreateComponent } from './create/tema-create/tema-create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
    },
    {
        path: 'novoTema',
        component: TemaCreateComponent
    },
    {
        path: 'novaCategoria',
        component: CategoriaCreateComponent
    },
    {
        path: 'novaPostagem',
        component: PostagemCreateComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastrar',
        component:  CadastrarComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
