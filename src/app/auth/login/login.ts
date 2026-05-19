import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService }
from '../../core/services/auth.service';

@Component({

  selector: 'app-login',

  standalone: false,

  templateUrl: './login.html',

  styleUrls: ['./login.css']

})

export class Login {

  // 🌸 VARIABLES
  email = '';

  password = '';

  loading = false;

  constructor(

    private authService:
    AuthService,

    private router: Router

  ){}

  // 🌸 LOGIN
  login(){

    // 🌸 VALIDATION
    if(
      this.email == '' ||
      this.password == ''
    ){

      alert(
        'Please fill all fields'
      );

      return;

    }

    this.loading = true;

    // 🌸 BODY
    const body = {

      email: this.email,

      password: this.password

    };

    // 🌸 API
    this.authService
    .login(body)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        this.loading = false;

        // 🌸 SUCCESS
        if(res.success){

          // 🌸 SAVE LOGIN
          localStorage.setItem(
            'admin',
            'true'
          );

          // 🌸 SAVE USER
          localStorage.setItem(
            'user',
            JSON.stringify(res)
          );

          alert(
            'Login Success'
          );

          // 🌸 REDIRECT
          this.router.navigate([
            '/dashboard'
          ]);

        }

        else{

          alert(
            res.message ||
            'Login Failed'
          );

        }

      },

      error:(err:any)=>{

        console.log(err);

        this.loading = false;

        alert(
          'Server Error'
        );

      }

    });

  }

}