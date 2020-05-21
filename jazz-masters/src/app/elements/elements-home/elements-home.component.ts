import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.component.html',
  styleUrls: ['./elements-home.component.scss']
})
export class ElementsHomeComponent implements OnInit, AfterViewInit {
  loading = false;
  constructor() { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 50);
  }

  ngAfterViewInit() {
    // this.loading = false;
  }

}
