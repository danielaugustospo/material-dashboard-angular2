import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importe HttpHeaders
import { AuthService } from './auth.service'; // Importe o AuthService

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private location: Location, private http: HttpClient, private authService: AuthService) { }

  getUrl(): string {
    let hostname = window.location.hostname;

    if (window.location.hostname === 'localhost'){
      hostname = 'https://devcriaatva.danieltecnologia.com';
    }
    // Verifica se o hostname começa com 'v2'
    if (hostname && hostname.startsWith('v2')) {
      // Remove 'v2' do início do hostname
      hostname = "https://" + hostname.substring(2);
    }

    return hostname;
  }

  getListaMateriais(token: string) {
    const url = this.getUrl() + '/api/listaTipoMateriais';
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Requested-With'
    });

    return this.http.get<any[]>(url, { headers });
  }

  getListaUnidades(token: string) {
    const url = this.getUrl() + '/api/listaUnidadeMedida';
    
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, X-Requested-With'
    });
    
    return this.http.get<any[]>(url, { headers });
  }
  
  cadastrarMaterial(dados: any) {
      const url = this.getUrl() + '/api/cadastromateriais';
      return this.http.post(url, dados);
    }
  
  cadastrarTipoMaterial(dados: any) {
      const url = this.getUrl() + '/api/cadastrotipomateriais';
      return this.http.post(url, dados);
    }

}
