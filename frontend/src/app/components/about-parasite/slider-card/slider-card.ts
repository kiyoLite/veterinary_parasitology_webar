import { Component, input } from '@angular/core';
import { ParasiteLifeStage } from '../../../Interface/parasite-life-cycle.interface';

@Component({
  selector: 'app-slider-card',
  imports: [],
  templateUrl: './slider-card.html',
  styleUrl: './slider-card.css',
})
export class SliderCard {
  lifeStage = input.required<ParasiteLifeStage>();
}
