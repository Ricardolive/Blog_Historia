import { Tema } from "./Tema";


export class Categoria{
    public id: number;
    public titulo: string;
    public imagem: string;
    public descricao: string;
    public tema: Tema[];
}