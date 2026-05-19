import { NgModule } from '@angular/core';

import { BrowserModule }
from '@angular/platform-browser';

import { App }
from './app';

import { AppRoutingModule }
from './app-routing.module';

import { FormsModule }
from '@angular/forms';

import { HttpClientModule }
from '@angular/common/http';

import { SharedModule }
from './shared/shared.module';

@NgModule({

  declarations: [

    App

  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule

  ],

  providers: [],

  bootstrap: [

    App

  ]

})

export class AppModule {}