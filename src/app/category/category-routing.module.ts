import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { CategoryForm }
from './category-form/category-form';

import { CategoryList }
from './category-list/category-list';

import { authGuard }
from '../core/guards/auth-guard';

const routes: Routes = [

  {
    path: 'categories',
    component: CategoryList,
    canActivate: [authGuard]
  },

  {
    path: 'add-category',
    component: CategoryForm,
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

export class CategoryRoutingModule {}