import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

interface LetContext<T> {
  appLet: T | null;
}

/**
 * Directive works similar to ngIf without requiring the
 * conditional logic or boiler plate to make ngLet work as select
 */
@Directive({
  selector: '[appLet]',
})
export class LetDirective<T> {
  private readonly context: LetContext<T> = { appLet: null };

  constructor(
    _viewContainer: ViewContainerRef,
    _templateRef: TemplateRef<LetContext<T>>
  ) {
    _viewContainer.createEmbeddedView(_templateRef, this.context);
  }

  @Input()
  set appLet(value: T) {
    this.context.appLet = value;
  }
}
