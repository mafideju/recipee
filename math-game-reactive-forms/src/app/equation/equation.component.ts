import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { delay, filter, scan } from 'rxjs/operators';

import { CustomValidators } from '../validators';


@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss']
})


export class EquationComponent implements OnInit {
  secondsPerSolution = 0;

  mathForm = new FormGroup({
    partA: new FormControl(this.randomNumber()),
    partB: new FormControl(this.randomNumber()),
    answer: new FormControl(''),
  }, [
    CustomValidators.add('partA', 'partB', 'answer'),
    // CustomValidators.sub('partA', 'partB', 'answer'),
    Validators.required,
  ]);

  get partA() {
    return this.mathForm.value.partA;
  }

  get partB() {
    return this.mathForm.value.partB;
  }

  get rightAnswer() {
    return this.handleRightAnswer();
  }

  constructor() { }

  ngOnInit(): void {

    this.mathForm.statusChanges
      .pipe(
        filter(resp => resp === 'VALID'),
        delay(600),
        scan((acc) => {
          return {
            numberSolved: acc.numberSolved + 1,
            startTime: acc.startTime
          }
        }, { numberSolved: 0, startTime: new Date() })
      )
      .subscribe(({ numberSolved, startTime }) => {
        this.secondsPerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000

        this.mathForm.controls.partA.setValue(this.randomNumber());
        this.mathForm.controls.partB.setValue(this.randomNumber());
        this.mathForm.controls.answer.setValue('');
    });

  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }

  handleRightAnswer() {
    return this.partA + this.partB;
  }

}
