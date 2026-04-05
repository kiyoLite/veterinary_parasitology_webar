import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ParasiteQuizRepository {
    getQuiz(parasite: string) {
        throw new Error("not implemented yet");
    }
}