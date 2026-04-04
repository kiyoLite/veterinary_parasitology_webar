import { Component, inject, output } from '@angular/core';
import { TaxonomicRepository } from '../../../repository/taxonomic.repository';
import { TaxonomicCategory } from '../../../Interface/taxonomic-category.interface';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ArrayDataSource } from '@angular/cdk/collections';

interface TaxonomicGridNode {
  category: TaxonomicCategory,
  gridColumn: number,
  gridRow: number
}

@Component({
  selector: 'taxonomic-map',
  imports: [CdkTreeModule],
  templateUrl: './taxonomic-map.html',
  styleUrl: './taxonomic-map.css',
})
export class TaxonomicMapComponent {
  private taxonomicRepository = inject(TaxonomicRepository);
  private mapNodesData: TaxonomicCategory[] = this.taxonomicRepository.getMapData();
  parasites = new ArrayDataSource<TaxonomicCategory>(this.mapNodesData);
  childrenAccessor = (node: TaxonomicCategory) => node.children ?? [];
  hasChildren = (_: number, node: TaxonomicCategory) => !!node.children && node.children.length > 0;
  selectTaxonomicNode = output<string>();




}


