import { Component, HostBinding, inject, input, output } from '@angular/core';
import { TaxonomicCategory } from '../../../Interface/taxonomic-category.interface';
import { RouterLink } from '@angular/router';
import { TaxonomicRepository } from '../../../repository/taxonomic.repository';

@Component({
  selector: 'taxonomic-node',
  imports: [RouterLink],
  templateUrl: './taxonomic-node.html',
  styleUrl: './taxonomic-node.css',
})
export class TaxonomicNode {
  taxonomicRepository = inject(TaxonomicRepository)
  taxonomicData = input.required<TaxonomicCategory>();
  gridRow = input.required<number>();
  gridColumn = input.required<number>();
  taxonomicNodeChild = output<{ row: number, column: number, id: number }>();


  getSubCatories(id: number): { name: string, id: number }[] {
    let subCategoriesRaw = this.taxonomicRepository.getSubNodes(id);
    let subCatories = subCategoriesRaw.map((current) => ({ name: current.name, id: current.id }));
    return subCatories;
  }

  selectChildNode(childIDRaw: string) {
    this.taxonomicNodeChild.emit(
      {
        row: this.gridRow() + 1,
        column: this.gridColumn(),
        id: parseInt(childIDRaw)
      });
  }





}
