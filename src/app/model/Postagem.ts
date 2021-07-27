import { Tema } from "./Tema";

export class Postagem{
  
    public id: number;
    public titulo: string;
    public imagem: string;
    public descricao: string;
    public texto: string;
    public dataPost: Date;
    public tema: Tema;
}