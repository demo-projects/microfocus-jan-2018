import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[mfUnless]'
})
export class UnlessDirective {
  viewLoaded = false;

  @Input() set mfUnless(value) {
    if (!value && !this.viewLoaded) {
      this.view.createEmbeddedView(this.template);
      this.viewLoaded = true;
    } else if (value && this.viewLoaded) {
      this.view.clear();
      this.viewLoaded = false;
    }
  }

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

}
