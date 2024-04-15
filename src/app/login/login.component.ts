import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  showPassword: boolean = false;
  rememberMe: boolean = false;

  constructor(private authService: AuthService) { }


  onSubmit() {


    if (this.rememberMe) {
      // Salvar a senha em localStorage
      localStorage.setItem('rememberedPassword', this.password);
    }

    // Verifique se o usuário e a senha estão preenchidos
    if (this.email.trim() === '' || this.password.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    this.authService.login(this.email, this.password)
      .subscribe(
        (data) => {
          // Sucesso no login
          // Armazene o token de autenticação, redirecione ou faça outra ação necessária
          console.log('Login bem-sucedido:', data);
        },
        (error) => {
          // Falha no login
          console.error('Erro de login:', error);
          alert('Login ou senha incorretos');
        }
      );
  }
}






