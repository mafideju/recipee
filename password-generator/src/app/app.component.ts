import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  passwordLength = 0;
  password = '';
  changeNumber = false;
  changeLetters = false;
  changeSpecials = false;

  passwordLengthChange(value: string) {
    if (parseInt(value, 10) <= 0) {
      return;
    }
    this.passwordLength = +value;
  }

  useNumbers() {
    this.changeNumber = !this.changeNumber;
  }

  useLetters() {
    this.changeLetters = !this.changeLetters;
  }

  useSpecials() {
    this.changeSpecials = !this.changeSpecials;
  }

  onGeneratePassword() {
    const numbers = '12345678901234567890';
    const letters = 'qwertyuiopasdfghjlzxcvbnm';
    const specials = '!@#$%*!@#$%*!@#$%*!@#$%*';

    let validChars = '';
    if (this.changeNumber) {
      validChars += numbers;
    }
    if (this.changeLetters) {
      validChars += letters;
    }
    if (this.changeSpecials) {
      validChars += specials;
    }

    let passwordGen = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      passwordGen += validChars[index];
    }
    this.password = passwordGen;
  }
}
