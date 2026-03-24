import { Component, input } from '@angular/core';

interface PopoverConfig {
  department: string,
  parasites: string[],
  coords: {
    x: number,
    y: number
  }
}

@Component({
  selector: 'parasite-popover',
  imports: [],
  templateUrl: './parasite-popover.html',
  styleUrl: './parasite-popover.css',
})
export class ParasitePopover {

  config = input.required<PopoverConfig>();
}
