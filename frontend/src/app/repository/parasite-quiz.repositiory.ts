import { Injectable } from "@angular/core";
import { Quiz } from "../Interface/quiz.interface";

@Injectable({ providedIn: 'root' })
export class ParasiteQuizRepository {
    getQuiz(parasite: string): Quiz {
        return [
            {
                title: "¿En qué parte del cuerpo se alojó Migi en el protagonista de 'Parasyte: The Maxim'?",
                options: ["Cerebro", "Brazo derecho", "Corazón", "Pierna izquierda"],
                correctAnswerIndex: 1
            },
            {
                title: "En 'Tokyo Ghoul', ¿qué órgano le trasplantan a Kaneki para convertirlo en un híbrido?",
                options: ["Riñón", "Corazón", "Pulmón", "Kakuhou"],
                correctAnswerIndex: 3
            },
            {
                title: "En el universo de 'Attack on Titan', ¿cuál es el origen biológico/parasitario de los Titanes?",
                options: ["Un virus alienígena", "La 'Fuente de toda materia orgánica'", "Un experimento fallido", "Evolución natural"],
                correctAnswerIndex: 1
            },
            {
                title: "En 'Hunter x Hunter', ¿cómo se reproducen las Hormigas Quimera para heredar rasgos de otras especies?",
                options: ["Fisión binaria", "Esporas", "Fagogénesis (comerse a otras especies)", "Infección viral"],
                correctAnswerIndex: 2
            },
            {
                title: "¿Qué técnica de 'Naruto' utiliza a los insectos Kikaichu como parásitos que consumen chakra?",
                options: ["Shinjutsu", "Arte del Clan Aburame", "Byakugan", "Sello Maldito"],
                correctAnswerIndex: 1
            }
        ];
    }
}