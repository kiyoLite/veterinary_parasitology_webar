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
        return `El ácaro de la familia Sarcoptidae incluye especies como Sarcoptes scabiei, responsable 
        de la sarna sarcóptica en mamíferos. Es un ectoparásito microscópico que excava túneles en la piel
        , donde deposita sus huevos. Provoca intenso prurito, inflamación y lesiones cutáneas. Se transmite
         por contacto directo entre hospedadores. Su ciclo de vida ocurre completamente en el huésped
         . Afecta a animales domésticos y silvestres, y algunas variantes pueden infectar temporalmente
          a humanos. El diagnóstico se realiza mediante raspados cutáneos y observación microscópica.`
    }


}