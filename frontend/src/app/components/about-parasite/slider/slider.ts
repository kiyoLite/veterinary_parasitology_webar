import { Component, input, signal } from '@angular/core';
import { ParasiteLifeCycle } from '../../../Interface/parasite-life-cycle.interface';
import { SliderCard } from '../slider-card/slider-card';

@Component({
  selector: 'slider',
  imports: [SliderCard],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
  items = input.required<ParasiteLifeCycle>();
  selectedCardIndex = signal<number>(0);
  setSelectCard(index: number) {
    this.selectedCardIndex.set(index);
  }

  previousCard() {
    this.selectedCardIndex.update(current => current > 0 ? current - 1 : current);
  }

  nextCard() {
    const amountCards = this.items().length;
    this.selectedCardIndex.update(current => (current - 1) < amountCards ? current + 1 : current);

  }
}
