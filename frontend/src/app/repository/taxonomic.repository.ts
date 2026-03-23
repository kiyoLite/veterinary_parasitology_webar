import { Injectable } from "@angular/core";
import { TaxonomicCategory } from "../Interface/taxonomic-category.interface";

@Injectable({
    providedIn: 'root'
})
export class TaxonomicRepository {
    getRootNodes = function (): TaxonomicCategory[] {
        return [{
            category: "familia",
            name: "parasito cool",
            id: 2,
            parasiteID: 3
        },
        {
            category: "familia",
            name: "parasito cool 2 ",
            id: 3,
        },
        {
            category: "familia",
            name: "parasito cool 3",
            id: 4,
        }];
    }

    getSubNodes = function (nodeID: number): TaxonomicCategory[] {
        return [
            {
                category: "subfamilia",
                name: "subparasito cool2",
                id: 3,
            },
            {
                category: "subfamilia",
                name: "subparasito cool3",
                id: 4,
                parasiteID: 1
            }
        ];
    }

    getNodeByID = function (nodeID: number): TaxonomicCategory | null {
        return {
            category: "subfamilia",
            name: "subparasito cool3",
            id: 3,
        };
    }

}