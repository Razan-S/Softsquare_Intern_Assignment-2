import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appShowIfNotNull]'
})
export class ShowIfNotNullDirective implements OnInit {
  constructor(private el: ElementRef) {}

  @Input('appShowIfNotNull') value: any;

  ngOnInit() {
    if (this.value === null) {
      this.el.nativeElement.style.visibility = 'hidden';
    }
  }
}
