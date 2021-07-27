import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemComponent } from './postagem/postagem.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { TemaCreateComponent } from './create/tema-create/tema-create.component';
import { FormsModule } from '@angular/forms';
import { CategoriaCreateComponent } from './create/categoria-create/categoria-create.component';
import { PostagemCreateComponent } from './create/postagem-create/postagem-create.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RodapeComponent,
    CategoriaComponent,
    TemaComponent,
    PostagemComponent,
    SobreNosComponent,
    ContatoComponent,
    TemaCreateComponent,
    CategoriaCreateComponent,
    PostagemCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
