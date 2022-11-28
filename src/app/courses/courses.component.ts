import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from "@angular/common/http";


interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}

@Component({
  selector: 'app-courses',
  template: `
      <ul *ngIf="courses$ | async as courses else noData">
          <li *ngFor="let course of courses">
              {{course.description}}
          </li>
      </ul>
      <ng-template #noData>No Data Available</ng-template>
  `})

@Injectable()
export class CoursesComponent {


}

// export class CoursesComponent implements OnInit {
//   courses$: Observable<Course[]>;

//   constructor(private http:HttpClient) {
//   }

//   ngOnInit() {

//       this.courses$ = this.http
//           .get<Course[]>("/courses.json")
//           .map(data => _.values(data))
//           .do(console.log);
//   }
// }
