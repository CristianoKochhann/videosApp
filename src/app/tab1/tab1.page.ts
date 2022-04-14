import { AlertController, ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) { }

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
      message:  'Filme Adicionado aos Favoritos',
      duration: 2000,
      color:    'success'
    });
    toast.present();
  }


}
