import { NgModule } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { RouterModule }
from '@angular/router';

import { HttpClientModule }
from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';

// 🌸 COMPONENTS
import { Login }
from './login/login';

import { Register }
from './register/register';

@NgModule({

  declarations: [

    Login,
    Register

  ],

  imports: [

    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    AuthRoutingModule

  ]

})

export class AuthModule {}