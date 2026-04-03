import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeaderComponent } from "../../components/shared/header/header";
import { TaxonomicMapComponent } from "../../components/taxonomic/taxonomic-map/taxonomic-map";
import { PresenceParasites } from '../../components/shared/presence-parasites/presence-parasites';
import { TaxonomicCategoryDetails } from '../../components/taxonomic/taxonomic-category-details/taxonomic-category-details';

enum PickSidePanel {
  PRESENCE_PARASITES, TAXONOMIC_CATEGORY_DETAILS, NONE
}

@Component({
  selector: 'taxonomic-map-page',
  imports: [HeaderComponent, TaxonomicMapComponent, PresenceParasites, TaxonomicCategoryDetails],
  templateUrl: './taxonomic-map-page.html',
  styleUrl: './taxonomic-map-page.css',
})
export class TaxonomicMapPageComponent {
  pickSidePanelEnum = PickSidePanel;
  pickSidePanel = signal<PickSidePanel>(this.pickSidePanelEnum.NONE);
  pickTaxonomicCategory = signal<string | null>(null);

}
