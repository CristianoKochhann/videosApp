import { DadosService } from './../services/dados.service';

import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';
import { IFilme } from './models/IFilme.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Videos';
  listaVideos: IFilme[] = [
    {
      nome: 'A era do gelo \n As aventuras de BUCK (2022)',
      lancamento: '28/01/2022 (BR)',
      duracao: '1h 21m',
      classificacao: '69%',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1iVjKCGHPVNj7IQVB1DdpL8U7Y8.jpg',
      generos: ['Animação', 'Comédia', 'Aventura', 'Família'],
      pagina: '/a-era-do-gelo-as-aventuras-de-buck',
    },
    {
      nome: 'O projeto ADAM (2022)',
      lancamento: '11/03/2022 (US)',
      duracao: '1h 46m',
      classificacao: '76%',
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg',
      generos: ['Ação', 'Aventura', 'Comédia', 'Ficção científica'],
      pagina: '/o-projeto-adam',
    },
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router
  ) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('dados-filme');
  }

  async exibirAlertaConfirmar() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja Favoritar Filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, Favoritar',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();//chama a funcao criada
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado aos Favoritos',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


}
