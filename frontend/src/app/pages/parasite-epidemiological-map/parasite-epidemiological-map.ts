import { Component, computed, inject } from '@angular/core';
import { EpidemiologicalMap } from "../../components/epidemiological/epidemiological-map/epidemiological-map";
import { HeaderComponent } from "../../components/shared/header/header";
import { PresenceParasites } from "../../components/shared/presence-parasites/presence-parasites";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { EpidemiologicalRepostiory } from '../../repository/epidemological.repository';

@Component({
  selector: 'app-parasite-epidemiological-map',
  imports: [EpidemiologicalMap, HeaderComponent, PresenceParasites],
  templateUrl: './parasite-epidemiological-map.html',
  styleUrl: './parasite-epidemiological-map.css',
})
export class ParasiteEpidemiologicalMap {
  private activateRouter = inject(ActivatedRoute);
  private repository = inject(EpidemiologicalRepostiory);
  parasite = toSignal(this.activateRouter.params.pipe(map(params => params['parasite'])));
  parasiteLocations = computed(() => this.repository.getDeparmentsParasiteExist(this.parasite()));

}
