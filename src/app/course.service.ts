//Register the service in providers in app.module.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor() { }
  getCourse() {
    return ["Service Physics", "Service Chemistry", "Service Mathematics"];
  }
}
