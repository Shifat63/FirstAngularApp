import { Component, OnInit } from '@angular/core';
import {CourseService} from "../course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title: string = "Title as a variable";
  courses: string[] = ["Physics", "Chemistry", "Mathematics"];
  coursesFromService: string[];
  //Dependency injection. When an instance of this component is created it is provided with an instance of CourseService
  constructor(courseService: CourseService) {
    this.coursesFromService = courseService.getCourse();
  }
  ngOnInit(): void {
  }
  getTitle(): string {
    return "Title from method";
  }
}
