import { IListaFilmes } from './../tab1/models/IFilmeAPI.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=1c635c7f57542e7622c502aec900256a';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarFilmes(busca: string): Observable<IListaFilmes> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(//metodo pipe vai concatenar varias funcoes  dentro do return
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }
}
