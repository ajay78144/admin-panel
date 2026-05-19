import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { Dashboard }
from './dashboard';

import { authGuard }
from '../core/guards/auth-guard';

const routes: Routes = [

  {

    path: 'dashboard',

    component: Dashboard,

    canActivate: [authGuard]

  }

];

@NgModule({

  imports: [

    RouterModule.forChild(routes)

  ],

  exports: [

    RouterModule

  ]

})

export class DashboardRoutingModule {}