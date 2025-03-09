import { Injectable } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root' // 🔥 Esto hace que Angular lo registre automáticamente
})
export class AuthService {
  user: any = null;

  constructor(private platform: Platform) {
    if (!this.platform.is('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  async loginWithGoogle() {
    try {
      const googleUser = await GoogleAuth.signIn();
      this.user = googleUser;
      return googleUser;
    } catch (error) {
      console.error('Error en el inicio de sesión con Google:', error);
      throw error;
    }
  }

  async logout() {
    await GoogleAuth.signOut();
    this.user = null;
  }

  getUser() {
    return this.user;
  }
}
