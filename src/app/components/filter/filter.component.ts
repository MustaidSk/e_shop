import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  category : Category[]=[];
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    this.collectAllCategories();
  }
  
  categorySelected(categoryId : string)
  {
    console.log(categoryId);
    
  }

  collectAllCategories()
  {
    this.categoryService.getALlCategories()
    .subscribe(
      {next: (categories) =>
      {
    this.category = categories;
    console.log(categories);
    
      },
      error :(errorResponse : HttpErrorResponse) =>
      {
      console.log(errorResponse);
      
      }
    }
    )
  }

}
