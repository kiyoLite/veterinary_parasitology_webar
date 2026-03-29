import { Injectable } from "@angular/core";
import { ColombiaDepartment, parasitesEachDeparment } from "../Interface/deparment-parasites.interface";

@Injectable({
    providedIn: "root"
})
export class EpidemiologicalRepostiory {
    getParasitesEachDeparment(): parasitesEachDeparment {
        throw new Error('Method not defined');
    }

    getDeparmentParasiteExist(parasite: string): ColombiaDepartment {
        throw new Error('Method not defined');
    }

}