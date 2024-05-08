// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verifica se a rota sendo acessada é a rota de login
    if (state.url === '/login') {
      // Verifica se o token existe e se é válido
      if (this.authService.isLoggedIn()) {
        // Se estiver logado, redireciona para a página de dashboard
        this.router.navigate(['/dashboard']);
        return false; // Impede o acesso à rota de login
      }
      return true; // Permite o acesso à rota de login
    }

    // Verifica se o token existe e se é válido
    if (this.authService.isLoggedIn()) {
      return true; // Permite o acesso à rota
    } else {
      if(state.url === '/catalogoFrame'){
        return true;
      }
      // Redireciona para a página de login se o usuário não estiver autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}