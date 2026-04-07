import { Component, input } from '@angular/core';
import { Quiz } from '../../../Interface/quiz.interface';
import { ParasiteQuestion } from "../parasite-question/parasite-question";

@Component({
  selector: 'app-list-parasite-question',
  imports: [ParasiteQuestion],
  templateUrl: './list-parasite-question.html',
  styleUrl: './list-parasite-question.css',
})
export class ListParasiteQuestion {
  questions = input.required<Quiz>();
  isSubmit = input.required<boolean>();
}
