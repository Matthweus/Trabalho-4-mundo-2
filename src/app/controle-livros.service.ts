import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      titulo: 'A Culpa é das Estrelas',
      resumo: ' Este romance emocionante narra a história de Hazel Grace Lancaster, uma jovem diagnosticada com câncer terminal, que encontra o amor ',
      codEditora: 1,
      autores: ['John Green']
    },
    {
      codigo: 2,
      titulo: 'A Menina que Roubava Livros',
      resumo: ' narra a vida de Liesel Meminger, uma jovem que encontra refúgio na leitura e na amizade com Max, um judeu escondido na casa de sua família',
      codEditora: 2,
      autores: [' Markus Zusak ']
    },
    {
      codigo: 3,
      titulo: 'O Código Da Vinci',
      resumo: ' Neste thriller de suspense, o simbologista Robert Langdon é convocado para desvendar um enigma que envolve o assassinato de um curador do Louvre e pistas deixadas por Leonardo da Vinci. ',
      codEditora: 3,
      autores: ['Dan Brown']
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro>{
    return this.livros;    
  }

  incluir(livro: Livro): void {
    let maxCodigo = Math.max(...this.livros.map(l => l.codigo));
    livro.codigo = maxCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    let index = this.livros.findIndex(l => l.codigo === codigo)
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
