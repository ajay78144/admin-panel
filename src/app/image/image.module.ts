import { NgModule } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { RouterModule }
from '@angular/router';

import { HttpClientModule }
from '@angular/common/http';

import { ImageRoutingModule }
from './image-routing.module';

// 🌸 COMPONENTS
import { ImageForm }
from './image-form/image-form';

import { ImageList }
from './image-list/image-list';

// 🌸 SHARED
import { SharedModule }
from '../shared/shared.module';

@NgModule({

  declarations: [

    ImageForm,
    ImageList

  ],

  imports: [

    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    ImageRoutingModule,
    SharedModule

  ]

})

export class ImageModule {}