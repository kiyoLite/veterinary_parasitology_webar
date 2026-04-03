import { Component, inject } from '@angular/core';
import { TaxonomicRepository } from '../../../repository/taxonomic.repository';
import { ColombiaDepartment, parasitesEachDeparment } from '../../../Interface/deparment-parasites.interface';

@Component({
  selector: 'app-presence-parasites',
  imports: [],
  templateUrl: './presence-parasites.html',
  styleUrl: './presence-parasites.css',
})
export class PresenceParasites {
  private taxonomicRepository = inject(TaxonomicRepository)
  parasiteLocationByDeparment: parasitesEachDeparment = this.taxonomicRepository.getParasitesLocationByDeparment()
  deparmentsWithParasites = Object.keys(this.parasiteLocationByDeparment) as ColombiaDepartment[];
}
