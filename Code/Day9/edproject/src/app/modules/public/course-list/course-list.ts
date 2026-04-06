import { Component, inject, OnInit } from '@angular/core';
import { CourseService } from '../../../services/course-service';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  

  courseService = inject(CourseService);
  courseList!: Course[];


  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next:(resp) => {
        this.courseList = resp;
      }
    })
  }

}
