import { Component, inject } from '@angular/core';
import { EpidemiologicalMap } from '../../components/epidemiological/epidemiological-map/epidemiological-map';
import { EpidemiologicalRepostiory } from '../../repository/epidemological.repository';
import { HeaderComponent } from "../../components/shared/header/header";
import { PresenceParasites } from "../../components/shared/presence-parasites/presence-parasites";

@Component({
  selector: 'app-general-epidemiological-map-page',
  imports: [EpidemiologicalMap, HeaderComponent, PresenceParasites],
  templateUrl: './general-epidemiological-map-page.html',
  styleUrl: './general-epidemiological-map-page.css',
})
export class GeneralEpidemiologicalMapPage {
  epidemiologicalRepository = inject(EpidemiologicalRepostiory);
  parasitesEachDeparment = this.epidemiologicalRepository.getParasitesEachDeparment();
  deparmentsWithParasites = new Set(this.parasitesEachDeparment.keys());
}
