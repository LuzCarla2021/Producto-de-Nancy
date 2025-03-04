import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-split-pane contentId="main-content">
        <ion-menu contentId="main-content" type="overlay">
          <ion-content>
            <ion-list id="inbox-list">
              <ion-list-header>Menú</ion-list-header>
              <ion-note>usuario&#64;email.com</ion-note>

              <ion-menu-toggle auto-hide="false" *ngFor="let p of appPages">
                <ion-item routerDirection="root" [routerLink]="[p.url]" lines="none" detail="false" routerLinkActive="selected">
                  <ion-icon aria-hidden="true" slot="start" [name]="p.icon"></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
            </ion-list>
          </ion-content>
        </ion-menu>
        <ion-router-outlet id="main-content"></ion-router-outlet>
      </ion-split-pane>
    </ion-app>
  `,
  styleUrls: ['app.component.scss'],
  standalone:false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio de Sesión (Google)', url: '/login-google', icon: 'logo-google' },
    { title: 'Inicio de Sesión (Otra Red)', url: '/login-otra-red', icon: 'log-in' },
    { title: 'Lector de Código', url: '/qr-scanner', icon: 'barcode' },
    { title: 'Edición de Perfil', url: '/editar-perfil', icon: 'person' },
    { title: 'Pago', url: '/pago', icon: 'card' }
  ];
  constructor() {}
}
