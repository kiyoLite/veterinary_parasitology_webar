import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/shared/header/header";
import { TaxonomicMapComponent } from "../../components/taxonomic/taxonomic-map/taxonomic-map";
@Component({
  selector: 'taxonomic-map-page',
  imports: [HeaderComponent, TaxonomicMapComponent],
  templateUrl: './taxonomic-map-page.html',
  styleUrl: './taxonomic-map-page.css',
})
export class TaxonomicMapPageComponent {

}
