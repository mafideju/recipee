import { Component } from '@angular/core';
import { classics } from '../data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentPage = 0;
  classics = classics;

  actualGroupIndex(i: number) {
    return Math.abs(this.currentPage - i) < 5;
  }

}
