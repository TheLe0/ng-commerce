import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  info: string;

  constructor() {
    this.info = "Ng Commerce - TheLe0";
  }

  ngOnInit(): void {
  }

}
