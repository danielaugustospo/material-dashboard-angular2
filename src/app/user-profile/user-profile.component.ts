import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Importe o AuthService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public authService: AuthService) { } // Injete o AuthService

  ngOnInit() {
  }

}
