import { Injectable } from "@angular/core";
import { TaxonomicCategory } from "../Interface/taxonomic-category.interface";
import { parasitesEachDeparment } from "../Interface/deparment-parasites.interface";

@Injectable({
    providedIn: 'root'
})
export class TaxonomicRepository {

    getMapData(): TaxonomicCategory[] {
        throw new Error('Method not implemented.');
    }
    getDetailsFromTaxonomicCategory(category: string): string {
        throw new Error('Method not implemented.');
    }
    getParasitesLocationByDeparment(): parasitesEachDeparment {
        throw new Error('Method not implemented.');
    }

}