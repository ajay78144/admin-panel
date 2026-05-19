import { NgModule } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { RouterModule }
from '@angular/router';

// 🌸 COMPONENTS
import { Sidebar }
from './sidebar/sidebar';

import { Header }
from './header/header';

import { Loader }
from './loader/loader';

@NgModule({

  declarations: [

    Sidebar,
    Header,
    Loader

  ],

  imports: [

    CommonModule,
    RouterModule

  ],

  exports: [

    Sidebar,
    Header,
    Loader

  ]

})

export class SharedModule {}