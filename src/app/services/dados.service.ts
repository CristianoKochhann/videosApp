import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

private dados: any = [];

  constructor() { }

  guardarDados(index: string, dados: any): boolean{//metodo para guardar dados
    if(index){
      this.dados[index] = dados;return true;
    }else{
      return false;
    }
  }

  pegarDados(index: string): any {//metodo para pegar os dados salvos da variavel
    if(index){
      return this.dados[index];
    }else{
      return null;
    }
  }

  deleteDados(index:  string): boolean{//metodo para salvar os dados gravados na array
    return delete this.dados[index];
  }
}
