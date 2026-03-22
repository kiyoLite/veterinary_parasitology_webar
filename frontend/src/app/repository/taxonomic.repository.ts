import { Injectable } from "@angular/core";
import { TaxonomicCategory } from "../Interface/taxonomic-category.interface";

@Injectable({
    providedIn: 'root'
})
export class TaxonomicRepository {
    getRootNodes = function (): TaxonomicCategory[] {
        return [];
    }

    getSubNodes = function (nodeID: number): TaxonomicCategory[] {
        return [];
    }

}