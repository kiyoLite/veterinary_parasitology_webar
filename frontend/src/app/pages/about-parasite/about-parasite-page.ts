import { Component, computed, inject } from '@angular/core';
import { Slider } from '../../components/about-parasite/slider/slider';
import { HeaderComponent } from "../../components/shared/header/header";
import { ParasiteModel } from "../../components/about-parasite/parasite-model/parasite-model";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AboutParasiteRepository } from '../../repository/about-parasite.repository';

@Component({
  selector: 'app-about-parasite-page',
  imports: [Slider, HeaderComponent, ParasiteModel],
  templateUrl: './about-parasite-page.html',
  styleUrl: './about-parasite-page.css',
})
export class AboutParasitePage {

  private activateRoute = inject(ActivatedRoute);
  private repository = inject(AboutParasiteRepository);
  parasite = toSignal(this.activateRoute.params.pipe(map(params => params['parasite'])));
  lifeCycle = computed(() => this.repository.getParasiteLifeCycle(this.parasite()));
  description = computed(() => this.repository.getParasiteDetails(this.parasite()));
}
