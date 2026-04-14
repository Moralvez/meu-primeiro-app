import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    
    constructor(private router1: Router){
    }

    navegateToHome(){
      this.router1.navigate(['/home']);
    }

    navegateToUser(){
      this.router1.navigate(['/user']);
    }

    navegateToAdm(){
      this.router1.navigate(['/adm']);
    }   


    
}