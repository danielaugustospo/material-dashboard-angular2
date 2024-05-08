
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Importe o operador map
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Importe o Router
import { UrlService } from './url-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router: Router, private urlService: UrlService) { } // Injete o Router
  
  private userPermissions: string[]; // Variável para armazenar as permissions do usuário

  private apiUrl = this.urlService.getUrl()+'/api';
  private userData: any; // Variável para armazenar os dados do usuário
  

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    const permissions = localStorage.getItem('userPermissions');
    if (token) {
      if(permissions){
        this.userPermissions = JSON.parse(permissions); // Recupera as permissions do LocalStorage
      }
      return true;
    }
    return false;
  }
  

  login(email: string, password: string): Observable<any> {
    // Define os cabeçalhos CORS necessários
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Requested-With'
    });
    
    // Envia a solicitação HTTP com os cabeçalhos definidos
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, { headers })
    .pipe(
      map(response => {
        if (response.token) {
          this.userData = response.user;
          this.userPermissions = response.allPermissions;
          localStorage.setItem('token', response.token);
          localStorage.setItem('userPermissions', JSON.stringify(response.allPermissions)); // Armazena as permissões no LocalStorage sem selecionar apenas o nome
          this.router.navigate(['/dashboard']);
        } else {
          alert('Usuário ou senha incorretos.');
          console.error('Erro de login:', response.error);
        }
      })
    );
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  hasPermission(permissionName: string): boolean {
    const userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
    console.log('Permissões do usuário:', userPermissions); // Adicione este console.log
  
    // Verifica se userPermissions é uma array válida e se pelo menos um dos elementos possui a permissão
    return Array.isArray(userPermissions) && userPermissions.some(permission => permission.name === permissionName);
  }
  
  

  cadastrar(email: string, password: string): boolean {
    // Implemente a lógica de cadastro
    return true; // Exemplo simples, substitua pela lógica real
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userPermissions');
    this.userData = null;
  }

  getUserData(): any {
    return this.userData;
  }

  updateProfile(userData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update-profile`, userData);
  }
  
  
}

