import { Injectable } from "@angular/core";
import { ColombiaDepartment, parasitesEachDeparment } from "../Interface/deparment-parasites.interface";

@Injectable({
    providedIn: "root"
})
export class EpidemiologicalRepostiory {
    getParasitesEachDeparment(): parasitesEachDeparment {
        const parasitesEachDeparment = new Map<ColombiaDepartment, string[]>();
        parasitesEachDeparment.set('Amazonas', ['parasito 1', 'parasito 2', 'parasito 3']);
        parasitesEachDeparment.set('Risaralda', ['parasito 1', 'parasito 2', 'parasito 3']);
        parasitesEachDeparment.set('Distrito Capital de Bogota', ['parasito 1', 'parasito 2', 'parasito 3']);
        return parasitesEachDeparment;
    }

    getDeparmentsParasiteExist(parasite: string): Set<ColombiaDepartment> {
        return new Set(['Risaralda', 'Amazonas', 'Antioquia', 'Choco', 'Cesar']);
    }

}