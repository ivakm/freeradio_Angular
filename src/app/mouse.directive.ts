import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {MatMenuTrigger} from "@angular/material/menu";

@Directive({
  selector: '[appMouse]'
})
export class MouseDirective {
  @Input() appMouse: MatMenuTrigger;

  constructor(private elRef: ElementRef) {
  }

  @HostListener("mouseover", ['$event']) onClick(event) {
    this.elRef.nativeElement.click();
    console.log(this.appMouse);
  };

}
