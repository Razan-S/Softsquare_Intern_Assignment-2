import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appShowInformation]',
  standalone: true
})
export class ShowInformationDirective implements OnChanges {
  @Input() appShowInformation!: boolean;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appShowInformation']) {
      console.log("Change");
      this.updateView();
    }
  }

  private updateView() {
    this.viewContainerRef.clear();
    if (this.appShowInformation) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
