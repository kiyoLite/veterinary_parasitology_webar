import { Component, computed, inject, signal } from '@angular/core';
import { TaxonomicRepository } from '../../../repository/taxonomic.repository';
import { TaxonomicCategory } from '../../../Interface/taxonomic-category.interface';
import { TaxonomicNode } from '../taxonomic-node/taxonomic-node';

interface TaxonomicGridNode {
  category: TaxonomicCategory,
  gridColumn: number,
  gridRow: number
}

@Component({
  selector: 'taxonomic-map',
  imports: [TaxonomicNode],
  templateUrl: './taxonomic-map.html',
  styleUrl: './taxonomic-map.css',
})
export class TaxonomicMapComponent {
  taxonomicRepository = inject(TaxonomicRepository);
  rootNodes = this.taxonomicRepository.getRootNodes();
  taxonomicRootNodes: TaxonomicGridNode[] = this.rootNodes.map((current, index) => ({
    category: current,
    gridColumn: index + 1,
    gridRow: 1
  }))
  nodes = signal<TaxonomicGridNode[]>(this.taxonomicRootNodes);
  mapGridColumns = this.taxonomicRootNodes.length;
  mapGridRows = signal(1);



  getStyleGridColumns() {
    return 'repeat(' + this.mapGridColumns + ' , 1fr)';
  }

  styleGridRows = computed(() => 'repeat(' + this.mapGridRows() + ', 1fr)');

  addNode(node: { column: number, row: number; id: number; }) {
    const newNode = this.taxonomicRepository.getNodeByID(node.id);
    if (newNode == null) return;
    const newGridNode: TaxonomicGridNode = { category: newNode, gridColumn: node.column, gridRow: node.row };
    this.mapGridRows.update(current => node.row > current ? node.row : current);
    this.nodes.update(list => [...list, newGridNode]);
  }

}
