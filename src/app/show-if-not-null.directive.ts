import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appShowIfNotNull]',
  standalone: true
})
export class ShowIfNotNullDirective implements OnChanges {
  @Input('appShowIfNotNull') value!: string | null;

  constructor(private el: ElementRef<HTMLImageElement>) {}

  ngOnChanges(changes: SimpleChanges) {
    if ('value' in changes) {
      const newValue = changes['value'].currentValue;
      if (newValue !== null && newValue !== undefined) {
        this.el.nativeElement.style.display = 'block';
        this.el.nativeElement.src = `https://flagcdn.com/${newValue}.svg`;
      } else {
        this.el.nativeElement.style.display = 'none';
      }
    }
  }
}

