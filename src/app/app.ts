import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-app');

  constructor(private router: Router) {}

  navegateToHome() {
    this.router.navigate(['/home']);
  }

  navegateToUser() {
    this.router.navigate(['/user']);
  }

  navegateToAdm() {
    this.router.navigate(['/adm']);
  }
}
