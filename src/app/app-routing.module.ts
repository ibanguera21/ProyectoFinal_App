import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),canActivate: [NologinGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'nr',
    loadChildren: () => import('./nr/nr.module').then( m => m.NrPageModule)
  },
  {
    path: 'nuevaruta',
    loadChildren: () => import('./nuevaruta/nuevaruta.module').then( m => m.NuevarutaPageModule)
  },
  {
    path: 'admisiones',
    loadChildren: () => import('./admisiones/admisiones.module').then( m => m.AdmisionesPageModule)
  },
  {
    path: 'coliseo',
    loadChildren: () => import('./coliseo/coliseo.module').then( m => m.ColiseoPageModule)
  },
  {
    path: 'financiamiento',
    loadChildren: () => import('./financiamiento/financiamiento.module').then( m => m.FinanciamientoPageModule)
  },
  {
    path: 'bloquek',
    loadChildren: () => import('./bloquek/bloquek.module').then( m => m.BloquekPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
