import { Categoria } from "./Categoria";
import { Postagem } from "./Postagem";


export class Tema{
    public id: number;
    public titulo: string;
    public descricao: string;
    public imagem: string;
    public postagem: Postagem[];
    public categoria: Categoria;

}