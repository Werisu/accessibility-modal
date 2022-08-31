import { AfterViewInit, Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusableElement!: HTMLElement;
  private lastFocusableElement!: HTMLElement;

  constructor(private elementRef: ElementRef<any>) {}

  public ngAfterViewInit(): void {
    const focusableElements = this.elementRef.nativeElement.querySelectorAll(`
    [tabindex]:not([tabindex="-1"]),
    a[href]:not([disabled]),
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    selector:not([disabled])`
    ) as Array<HTMLElement>;
    this.firstFocusableElement = focusableElements[0];
    this.lastFocusableElement = focusableElements[focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  // o decorator HostListener permite ouvir eventos a apartir do elemento host
  @HostListener('keydown', ['$event'])
  public manageTab(event: KeyboardEvent): void{
    console.log(event);

    if(event.key !== 'Tab'){
      return;
    }

    if(event.shiftKey && document.activeElement === this.firstFocusableElement){
      this.lastFocusableElement.focus();
      event.preventDefault();
    } else if (document.activeElement === this.lastFocusableElement) {
      this.firstFocusableElement.focus();
      event.preventDefault();
    }
  }
}
