import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.scss']
})
export class AccordComponent implements OnInit {
  @Input() accords = [];
  openedItemIndex = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAccord(index: number) {
    if (index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
