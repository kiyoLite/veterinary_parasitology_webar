import { Component, computed, input, OnInit, signal } from '@angular/core';
import { ParasitePopover } from '../parasite-popover/parasite-popover';


interface PopoverConfig {
  department: string,
  parasites: string[],
  coords: {
    x: number,
    y: number
  }
}

@Component({
  selector: 'epidemiological-map',
  imports: [ParasitePopover],
  templateUrl: './epidemiological-map.html',
  styleUrl: './epidemiological-map.css',
})
export class EpidemiologicalMap implements OnInit {
  parasitesAreas = input.required<Set<string>>();
  parasitesByDeparment = input<Map<string, string[]>>();
  timerId: undefined | number = undefined;
  popoverConfig = signal<PopoverConfig | null>(null);
  debounceShowPopover: (event: MouseEvent) => void = () => { }

  ngOnInit(): void {
    this.debounceShowPopover = this.debounceOrEmptyFunctionIfNotRequireData(
      this.showParasitesFromDepartment.bind(this),
      1500
    );
  }

  debounceOrEmptyFunctionIfNotRequireData(callback: any, wait: number) {
    if (this.parasitesByDeparment() == undefined) return () => { }
    return (mouseEvent: MouseEvent) => {
      clearInterval(this.timerId);
      this.timerId = setTimeout(() => {
        callback(mouseEvent);
      }, wait);
    }
  }



  showParasitesFromDepartment(event: MouseEvent) {
    const clickElement = event.target;
    if (!(clickElement instanceof SVGElement)) return;
    const deparment = clickElement!.closest("path")!;
    const containsDeparmentParasites = deparment.classList.contains("contains-parasites");
    if (!containsDeparmentParasites) return;
    const deparmentName = deparment.getAttribute("title")!;
    this.popoverConfig.set({
      department: deparmentName,
      parasites: this.parasitesByDeparment()!.get(deparmentName)!,
      coords: {
        x: event.pageX,
        y: event.pageY
      }
    })
  }

  hiddenParasitesFromDepartment() {
    clearTimeout(this.timerId);
    this.popoverConfig.set(null);
  }



}
