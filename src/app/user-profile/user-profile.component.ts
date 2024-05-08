import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Importe o AuthService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  userData: any; // Defina a propriedade userData

  constructor(public authService: AuthService) { } // Injete o AuthService

  ngOnInit() {
    this.userData = this.authService.getUserData(); // Obtenha os dados do usuário do serviço AuthService
  }

  updateProfile() {
    
    this.authService.updateProfile(this.userData); 

    // Implemente a lógica para atualizar o perfil do usuário aqui
  }

}
