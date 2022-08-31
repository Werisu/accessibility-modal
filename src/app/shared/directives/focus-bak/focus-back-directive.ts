import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy {

  private lastFocusElement!: Element;

  constructor() {}

  public ngOnInit(): void {
    this.lastFocusElement = document.activeElement as Element;
  }

  public ngOnDestroy(): void {
    if (this.lastFocusElement) {
      (this.lastFocusElement as HTMLElement).focus();
    }
  }
}
