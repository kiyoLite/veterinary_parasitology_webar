import { Location } from '@angular/common';
import { Directive, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appNavigateBack]'
})
export class NavigateBack {

  constructor() { }
  private location = inject(Location);

  @HostListener('click') backLastPage() {
    this.location.back();
  }

}
