import { NgModule } from '@angular/core';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { ImageForm }
from './image-form/image-form';

import { ImageList }
from './image-list/image-list';

import { authGuard }
from '../core/guards/auth-guard';

const routes: Routes = [

  {
    path: 'images',
    component: ImageList,
    canActivate: [authGuard]
  },

  {
    path: 'add-image',
    component: ImageForm,
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

export class ImageRoutingModule {}