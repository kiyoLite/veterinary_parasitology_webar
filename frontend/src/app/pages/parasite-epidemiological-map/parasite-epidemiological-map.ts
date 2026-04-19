import { Component, inject } from '@angular/core';
import { EpidemiologicalMap } from "../../components/epidemiological/epidemiological-map/epidemiological-map";
import { HeaderComponent } from "../../components/shared/header/header";
import { PresenceParasites } from "../../components/shared/presence-parasites/presence-parasites";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-parasite-epidemiological-map',
  imports: [EpidemiologicalMap, HeaderComponent, PresenceParasites],
  templateUrl: './parasite-epidemiological-map.html',
  styleUrl: './parasite-epidemiological-map.css',
})
export class ParasiteEpidemiologicalMap {
  private activateRouter = inject(ActivatedRoute);
  parasite = toSignal(this.activateRouter.params.pipe(map(params => params['parasite'])));

}
