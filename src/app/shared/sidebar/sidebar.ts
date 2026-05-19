import { Component } from '@angular/core';

import { Router }
from '@angular/router';

@Component({

  selector: 'app-sidebar',

  standalone: false,

  templateUrl: './sidebar.html',

  styleUrls: ['./sidebar.css']

})

export class Sidebar {

  constructor(
    private router: Router
  ){}

  // 🌸 LOGOUT
  logout(){

    // TOKEN REMOVE
    localStorage.removeItem(
      'token'
    );

    // REDIRECT LOGIN
    this.router.navigate([
      '/login'
    ]);

  }

}