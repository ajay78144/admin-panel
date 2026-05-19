import { Component } from '@angular/core';

import {
  Router,
  NavigationEnd
} from '@angular/router';

@Component({
  selector: 'app-root',

  standalone: false,

  templateUrl: './app.html',

  styleUrls: ['./app.css']
})

export class App {

  // 🌸 LOGIN CHECK
  isLoginPage = false;

  constructor(
    private router: Router
  ){

    // 🌸 ROUTE CHANGE
    this.router.events.subscribe((event)=>{

      if(event instanceof NavigationEnd){

        // 🌸 AUTH PAGES
        this.isLoginPage =

        event.url.includes('/login')

        ||

        event.url.includes('/register');

      }

    });

  }

}