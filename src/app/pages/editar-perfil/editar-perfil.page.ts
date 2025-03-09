import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  standalone:false
})
export class EditarPerfilPage implements OnInit {
  profileImage: string | null | undefined = null; // Permitir undefined

  constructor() {}

  ngOnInit() {}

  async changeProfilePicture() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 90
      });

      this.profileImage = image.dataUrl ?? null; // Si `dataUrl` es undefined, asigna `null`
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}
