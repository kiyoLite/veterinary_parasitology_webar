import { Component, inject } from '@angular/core';
import { EpidemiologicalMap } from '../../components/epidemiological/epidemiological-map/epidemiological-map';
import { EpidemiologicalRepostiory } from '../../repository/epidemological.repository';

@Component({
  selector: 'app-general-epidemiological-map-page',
  imports: [EpidemiologicalMap],
  templateUrl: './general-epidemiological-map-page.html',
  styleUrl: './general-epidemiological-map-page.css',
})
export class GeneralEpidemiologicalMapPage {
  epidemiologicalRepository = inject(EpidemiologicalRepostiory);
  parasitesEachDeparment = this.epidemiologicalRepository.getParasitesEachDeparment();
  deparmentsWithParasites = new Set(this.parasitesEachDeparment.keys());
}
