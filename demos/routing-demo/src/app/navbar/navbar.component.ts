import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
