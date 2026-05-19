import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService }
from '../../core/services/auth.service';

@Component({
  selector: 'app-login',

  standalone: false,

  templateUrl: './login.html',

  styleUrls: ['./login.css'],
})

export class Login {

  email = '';

  password = '';

  loading = false;

  constructor(

    private authService:
    AuthService,

    private router: Router

  ) {}

  // 🌸 LOGIN
  login(){

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

    const body = {

      email: this.email,

      password: this.password

    };

    this.authService
    .login(body)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        this.loading = false;

        if(res.success){

          // 🌸 SAVE LOGIN
          localStorage.setItem(
            'admin',
            'true'
          );

          localStorage.setItem(
            'user',
            JSON.stringify(res)
          );

          alert(
            'Login Success'
          );

          // 🌸 REDIRECT
          this.router.navigateByUrl(
            '/dashboard'
          );

        }

        else{

          alert(
            res.message ||
            'Login Failed'
          );

        }

      },

      error:(err)=>{

        console.log(err);

        this.loading = false;

        alert(
          'Server Error'
        );

      }

    });

  }

}