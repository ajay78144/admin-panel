import { NgModule } from '@angular/core';

import { CommonModule }
from '@angular/common';

import { FormsModule }
from '@angular/forms';

import { RouterModule }
from '@angular/router';

import { HttpClientModule }
from '@angular/common/http';

import { CategoryRoutingModule }
from './category-routing.module';

// 🌸 COMPONENTS
import { CategoryForm }
from './category-form/category-form';

import { CategoryList }
from './category-list/category-list';

// 🌸 SHARED
import { SharedModule }
from '../shared/shared.module';

@NgModule({

  declarations: [

    CategoryForm,
    CategoryList

  ],

  imports: [

    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    CategoryRoutingModule,
    SharedModule

  ]

})

export class CategoryModule {}