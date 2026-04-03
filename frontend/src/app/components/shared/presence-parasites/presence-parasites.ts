import { Component, inject } from '@angular/core';
import { ColombiaDepartment, parasitesEachDeparment } from '../../../Interface/deparment-parasites.interface';
import { EpidemiologicalRepostiory } from '../../../repository/epidemological.repository';

@Component({
  selector: 'app-presence-parasites',
  imports: [],
  templateUrl: './presence-parasites.html',
  styleUrl: './presence-parasites.css',
})
export class PresenceParasites {
  private epidemimiologicalRepository = inject(EpidemiologicalRepostiory)
  parasiteLocationByDeparment: parasitesEachDeparment = this.epidemimiologicalRepository.getParasitesEachDeparment();
  deparmentsWithParasites = Array.from(this.parasiteLocationByDeparment.keys()) as ColombiaDepartment[];

}
