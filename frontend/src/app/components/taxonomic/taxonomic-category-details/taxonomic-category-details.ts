import { Component, computed, inject, input } from '@angular/core';
import { TaxonomicRepository } from '../../../repository/taxonomic.repository';

@Component({
  selector: 'app-taxonomic-category-details',
  imports: [],
  templateUrl: './taxonomic-category-details.html',
  styleUrl: './taxonomic-category-details.css',
})
export class TaxonomicCategoryDetails {
  private taxonomicRepository = inject(TaxonomicRepository);
  taxonomicCategory = input.required<string | null>();
  taxonomicCategoryDetails = computed(() => {
    if (this.taxonomicCategory() === null) return '';
    return this.taxonomicRepository.getDetailsFromTaxonomicCategory(this.taxonomicCategory()!);
  });


  )
}
