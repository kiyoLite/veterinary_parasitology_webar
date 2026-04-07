import { Component, computed, input } from '@angular/core';
import { QuizQuestion } from '../../../Interface/quiz.interface';

@Component({
  selector: 'app-parasite-question',
  imports: [],
  templateUrl: './parasite-question.html',
  styleUrl: './parasite-question.css',
})
export class ParasiteQuestion {
  question = input.required<QuizQuestion>();
  isSubmit = input.required<boolean>();



  private isSelectOption(optionsForm: HTMLFormElement, optionIndex: number) {
    const formData = new FormData(optionsForm);
    const selectOption = formData.get("question") as number | null;
    return selectOption == optionIndex
  }

  isCorrectOption(optionsForm: HTMLFormElement, optionIndex: number) {
    return this.isSelectOption(optionsForm, optionIndex) && optionIndex == this.question().correctAnswerIndex;
  }

  isIncorrectOption(optionsForm: HTMLFormElement, optionIndex: number) {
    return this.isSelectOption(optionsForm, optionIndex) && optionIndex != this.question().correctAnswerIndex;
  }


}
