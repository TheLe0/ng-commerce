import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  people: Person[];

  constructor() {
    this.people = [
      new Person("Manuella Nevoresky", "CEO - Founder", "https://res.cloudinary.com/mhmd/image/upload/v1556834132/avatar-4_ozhrib.png"),
      new Person("Samuel Hardy", "CEO - Founder", "https://res.cloudinary.com/mhmd/image/upload/v1556834130/avatar-3_hzlize.png"),
      new Person("Tom Sunderland", "CEO - Founder", "https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"),
      new Person("John Tarly", "CEO - Founder", "https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png")
    ]
  }

  ngOnInit(): void {
  }

}
