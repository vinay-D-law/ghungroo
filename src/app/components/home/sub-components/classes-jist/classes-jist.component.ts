import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes-jist',
  templateUrl: './classes-jist.component.html',
  styleUrls: ['./classes-jist.component.scss']
})
export class ClassesJistComponent implements OnInit {
  constructor() { }
  classes: ClassDetails[];
  ngOnInit() {
    this.classes = [
      new ClassDetails(
        'Kids (age group 4 to 6)',
        'Tuesday & Thursday',
        '6pm to 7 pm',
        '../../../../../assets/images/kids.jpg'
      ),
      new ClassDetails(
        'Kids (age group 7 to 11)',
        'Wednesday',
        '6pm to 7 pm',
        '../../../../../assets/images/kids2.jpg'
      ),
      new ClassDetails(
        'Adults',
        'Monday & Friday',
        '7.30 pm to 8.30 pm',
        '../../../../../assets/images/adults.jpg'
      ),
    ];
  }

}

class ClassDetails {
  heading: string;
  days: string;
  time: string;
  imageUrl: string;
  constructor(heading, days, time, imageUrl) {
    this.heading = heading, this.days = days, this.time = time;
    this.imageUrl = imageUrl;
  }
}
