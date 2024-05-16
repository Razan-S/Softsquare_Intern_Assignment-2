import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlag]',
  standalone: true
})
export class FlagDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('input') onInput() {
    const inputValue = this.elementRef.nativeElement.value;
    const flagImage = this.elementRef.nativeElement.nextElementSibling;

    if (!flagImage || flagImage.tagName !== 'IMG') {
      return; // Exit if there is no flag image
    }

    flagImage.style.display = inputValue ? 'inline-block' : 'none';
  }
}