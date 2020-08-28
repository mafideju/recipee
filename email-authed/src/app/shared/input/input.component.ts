import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() placeholder: string;
  @Input() control: FormControl;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    return this.control.dirty && this.control.errors;
  }

}
