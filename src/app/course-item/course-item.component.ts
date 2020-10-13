import { Component, OnInit } from '@angular/core';
import { CourseItem } from '../models/CourseItem';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  constructor() { }

  courseItem = new CourseItem('Angular State Management', 'Angular State Management using NgRx', '20-SEP-2020', 45);

  ngOnInit(): void {
  }

}
