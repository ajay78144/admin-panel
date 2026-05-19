import { Component } from '@angular/core';

import { ImageService }
from '../core/services/image.service';

import { CategoryService }
from '../core/services/category.service';

@Component({

  selector: 'app-dashboard',

  standalone: false,

  templateUrl: './dashboard.html',

  styleUrls: ['./dashboard.css']

})

export class DashboardComponent {

  // 🌸 DATA
  totalImages = 0;

  totalCategories = 0;

  trendingImages = 0;

  latestImages:any = [];

  constructor(

    private imageService:
    ImageService,

    private categoryService:
    CategoryService

  ){

    this.getCategories();

    this.getImages();

  }

  // 🌸 GET CATEGORY
  getCategories(){

    this.categoryService
    .getCategories()
    .subscribe((res:any)=>{

      this.totalCategories =
      res.length;

    });

  }

  // 🌸 GET IMAGES
  getImages(){

    this.imageService
    .getImages()
    .subscribe((res:any)=>{

      this.totalImages =
      res.length;

      this.trendingImages =
      res.filter(
        (x:any)=>
        x.trending == true
      ).length;

      this.latestImages =
      res.slice(0,6);

    });

  }

}