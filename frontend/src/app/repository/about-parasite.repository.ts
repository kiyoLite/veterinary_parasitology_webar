import { Injectable } from "@angular/core";
import { ParasiteLifeCycle } from "../Interface/parasite-life-cycle.interface";

@Injectable({
    providedIn: "root"
})
export class AboutParasiteRepository {

    getParasiteLifeCycle(parasite: string): ParasiteLifeCycle {
        throw new Error("not implemented yet")
    }

    getParasiteDetails(parasite: string): string {
        throw new Error("not implemented yer")
    }
}