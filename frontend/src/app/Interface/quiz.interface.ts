export interface QuizQuestion {
    title: string,
    options: string[],
    correctAnswerIndex: number;
}

export type Quiz = QuizQuestion[]