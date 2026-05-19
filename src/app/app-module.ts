import { NgModule } from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { App } from './app';

import { AppRoutingModule }
from './app-routing.module';

import { HttpClientModule }
from '@angular/common/http';

import { FormsModule }
from '@angular/forms';

import { RouterModule }
from '@angular/router';

// 🌸 MODULES
import { CategoryModule }
from './category/category.module';

import { AuthModule }
from './auth/auth.module';

import { ImageModule }
from './image/image.module';

import { DashboardModule }
from './dashboard/dashboard.module';



@NgModule({

  declarations: [

    App

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    // 🌸 CUSTOM MODULES
    CategoryModule,
    AuthModule,
    ImageModule,
    DashboardModule,

  ],

  providers: [],

  bootstrap: [App]

})

export class AppModule {}