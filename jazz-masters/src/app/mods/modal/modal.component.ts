import {
  Component,
  OnInit,
  ElementRef,
  OnDestroy,
  Output,
  Input,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter();
  @Input() classics = [];

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    // document.body.removeChild(this.elementRef.nativeElement);
    this.elementRef.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
