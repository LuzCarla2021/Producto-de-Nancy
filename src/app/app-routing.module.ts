import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-google', pathMatch: 'full' },
  { path: 'login-google', loadChildren: () => import('./pages/login-google/login-google.module').then(m => m.LoginGooglePageModule) },
  { path: 'login-otra-red', loadChildren: () => import('./pages/login-otra-red/login-otra-red.module').then(m => m.LoginOtraRedPageModule) },
  { path: 'qr-scanner', loadChildren: () => import('./pages/qr-scanner/qr-scanner.module').then(m => m.QrScannerPageModule) },
  { path: 'editar-perfil', loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then(m => m.EditarPerfilPageModule) },
  { path: 'pago', loadChildren: () => import('./pages/pago/pago.module').then(m => m.PagoPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
