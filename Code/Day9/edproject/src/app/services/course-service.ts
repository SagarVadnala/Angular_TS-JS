import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Course } from '../models/course';


@Injectable({
  providedIn: 'root',
})
export class CourseService {
  
   httpClient = inject(HttpClient);

   getCourses(){
    return this.httpClient.get<Course[]>(`${environment.apiAddress}/Catalog/GetAll`)
   }
   
}
