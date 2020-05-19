import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string;
  date: Date;
  amount: number;
  decimal: number;
  json: string;
  miles: number;

  onMilesChange(value: number) {
    this.miles = +value;
  }

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: Date) {
    this.date = value;
  }

  onAmountChange(value: number) {
    this.amount = value;
  }

  onDecimalChange(value: number) {
    this.decimal = value;
  }

  onJSONChange(value: string) {
    this.json = value;
  }
}
