import { Injectable } from "@angular/core";
import { TaxonomicCategory } from "../Interface/taxonomic-category.interface";
import { parasitesEachDeparment } from "../Interface/deparment-parasites.interface";

@Injectable({
    providedIn: 'root'
})
export class TaxonomicRepository {

    getMapData(): TaxonomicCategory[] {
        return [
            {
                name: "Fasciolidae",
                "category": "Familia",
                "children": [
                    {
                        "name": "Fasciolinae",
                        "category": "Sub-familia",
                        "children": [
                            {
                                "name": "Fasciola hepatica",
                                "category": "Parasito",
                                "parasiteID": 1024
                            },
                            {
                                "name": "Fasciola gigantica",
                                "category": "Parasito",
                                "parasiteID": 1025
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Culicidae",
                "category": "Familia",
                "children": [
                    {
                        "name": "Anophelinae",
                        "category": "Sub-familia",
                        "children": [
                            {
                                "name": "Anopheles gambiae",
                                "category": "Parasito",
                                "parasiteID": 2048
                            }
                        ]
                    },
                    {
                        "name": "Culicinae",
                        "category": "Sub-familia",
                        "children": [
                            {
                                "name": "Culex pipiens",
                                "category": "Parasito",
                                "parasiteID": 2049
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Sarcoptidae",
                "category": "Familia",
                "children": [
                    {
                        "name": "Sarcoptinae",
                        "category": "Sub-familia",
                        "children": [
                            {
                                "name": "Sarcoptes scabiei",
                                "category": "Parasito",
                                "parasiteID": 3072
                            }
                        ]
                    }
                ]
            }
        ];

    }
    getDetailsFromTaxonomicCategory(category: string): string {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }


}