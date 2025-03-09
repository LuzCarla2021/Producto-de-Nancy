import { Injectable } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = null;

  constructor(private platform: Platform) {
    // Inicializar GoogleAuth en la web
    if (!this.platform.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  async loginWithGoogle() {
    try {
      const googleUser = await GoogleAuth.signIn();
      this.user = googleUser;
      console.log('Usuario logueado:', googleUser);
      return googleUser;
    } catch (error) {
      console.error('Error en Google Login', error);
      throw error;
    }
  }

  async logout() {
    try {
      await GoogleAuth.signOut();
      this.user = null;
    } catch (error) {
      console.error('Error al cerrar sesión', error);
    }
  }

  getUser() {
    return this.user;
  }
}
