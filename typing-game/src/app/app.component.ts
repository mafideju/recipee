import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  lorem = lorem.sentence();
  text = '';

  inputTypeChange(value: string) {
    this.text = value;
  }

  validateChars(singleChar: string, text: string) {
    if (!text) { return 'pending'; }
    if (singleChar === text) {
      return 'exact';
    } else {
      return 'wrong';
    }
  }
}
