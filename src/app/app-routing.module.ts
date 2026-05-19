import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // 🌸 AUTH
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.module')
      .then(m => m.AuthModule)
  },

  // 🌸 CATEGORY
  {
    path: '',
    loadChildren: () =>
      import('./category/category.module')
      .then(m => m.CategoryModule)
  },

  // 🌸 IMAGE
  {
    path: '',
    loadChildren: () =>
      import('./image/image.module')
      .then(m => m.ImageModule)
  },

  // 🌸 DASHBOARD
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module')
      .then(m => m.DashboardModule)
  }

];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {}