import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[mfClickAndStop]'
})
export class ClickAndStopDirective {
  @Output() mfClickAndStop = new EventEmitter<any>();
  constructor() { }

  @HostListener('click', ['$event'])
  handleClick($event) {
    $event.stopPropagation();
    this.mfClickAndStop.emit($event);
  }
}
