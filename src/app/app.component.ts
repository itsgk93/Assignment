import { RouterModule, Routes, Router } from '@angular/router';
import { User } from './user/user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router : Router){
    this.router.navigate(['/user']);
  }
}
