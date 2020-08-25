import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appHighlightAnswer]'
})
export class HighlightAnswerDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private formControl: NgControl
  ) {}

  ngOnInit() {
    this.formControl.control.parent.valueChanges
      .pipe(
        map(({partA,partB,answer}) => Math.abs((partA+partB-answer)/(partA+partB)))
      )
      .subscribe(resp => {
        console.log('this.el.nativeElement :>> ', this.el);
        if (resp < 0.2) {
          this.el.nativeElement.parentNode.parentNode.classList.add('close');
        } else {
          this.el.nativeElement.parentNode.parentNode.classList.remove('close')
        }
      });
  }

}
