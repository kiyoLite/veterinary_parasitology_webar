import { Injectable } from "@angular/core";
import { ParasiteLifeCycle } from "../Interface/parasite-life-cycle.interface";

@Injectable({
    providedIn: "root"
})
export class AboutParasiteRepository {

    getParasiteLifeCycle(parasite: string): ParasiteLifeCycle {
        return [
            {
                stage: "Infiltración Silenciosa",
                imageUrl: "assets/icons/magnifying-glass.svg",
                description: "El ciclo comienza con una pequeña espora que desciende desde la atmósfera. Al eclosionar, una criatura similar a un gusano busca perforar la piel del huésped para llegar al sistema nervioso central."
            },
            {
                stage: "Maduración y Sustitución",
                imageUrl: "assets/icons/magnifying-glass.svg",
                description: "Una vez alcanzado el cerebro o un órgano vital, el parásito consume la estructura original y la reemplaza por completo, asumiendo el control de las funciones motoras y cognitivas del huésped."
            },
            {
                stage: "Mimetismo Adaptativo",
                imageUrl: "assets/icons/magnifying-glass.svg",
                description: "En su etapa adulta, el parásito puede manipular su estructura celular a voluntad, permitiéndole endurecer tejidos para el combate o alterar su apariencia física para pasar desapercibido entre los humanos."
            }
        ];
    }

    getParasiteDetails(parasite: string): string {
        return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'.repeat(10)
    }
}