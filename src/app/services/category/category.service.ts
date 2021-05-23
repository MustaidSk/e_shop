import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getUrl = 'http://localhost:8000/api/categories';
  constructor(
    private http : HttpClient) { }

    getALlCategories()
    {
      return this.http.get(this.getUrl)
      .pipe(
        map(result => {
          return <Category[]>result['categories']
        })
      )
    }
   
}
