import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';  // Asegura que la ruta es correcta

@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.page.html',
  styleUrls: ['./login-google.page.scss'],
  standalone:false,
})
export class LoginGooglePage implements OnInit {

  user: any = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Puedes inicializar algo aquí si es necesario
    console.log("LoginGooglePage inicializado");
  }

  async login() {
    try {
      this.user = await this.authService.loginWithGoogle();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error("Error en el inicio de sesión", error);
    }
  }

  async logout() {
    await this.authService.logout();
    this.user = null;
  }
}
