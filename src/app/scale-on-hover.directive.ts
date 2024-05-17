import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScaleOnHover]',
  standalone: true
})
export class ScaleOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(2)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s');
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}
