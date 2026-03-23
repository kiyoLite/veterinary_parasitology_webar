import { Component, input } from '@angular/core';

@Component({
  selector: 'epidemiological-map',
  imports: [],
  templateUrl: './epidemiological-map.html',
  styleUrl: './epidemiological-map.css',
})
export class EpidemiologicalMap {
  parasitesAreas = input.required<Set<string>>();
  parasitesByDeparment = input<Record<string, string[]>>();



}
