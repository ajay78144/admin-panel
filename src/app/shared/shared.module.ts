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

@NgModule({

  declarations: [

    Sidebar,
    Header

  ],

  imports: [

    CommonModule,
    RouterModule

  ],

  exports: [

    Sidebar,
    Header

  ]

})

export class SharedModule {}