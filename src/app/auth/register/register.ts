import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService }
from '../../core/services/auth.service';

@Component({
  selector: 'app-register',

  standalone: false,

  templateUrl: './register.html',

  styleUrls: ['./register.css'],
})

export class Register {

  email = '';

  password = '';

  loading = false;

  constructor(

    private authService:
    AuthService,

    private router: Router

  ) {}

  // 🌸 REGISTER
  registerUser(){

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
    .register(body)
    .subscribe({

      next:(res:any)=>{

        console.log(res);

        this.loading = false;

        if(res.success){

          alert(
            'Register Success'
          );

          this.router.navigateByUrl(
            '/login'
          );

        }

        else{

          alert(
            res.message ||
            'Register Failed'
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