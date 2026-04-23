import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParasiteQuizRepository } from '../../repository/parasite-quiz.repositiory';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { HeaderComponent } from "../../components/shared/header/header";
import { ListParasiteQuestion } from "../../components/parasite-quiz/list-parasite-question/list-parasite-question";
import { NavigateBack } from '../../directives/shared/navigate-back';

@Component({
  selector: 'app-parasite-quiz',
  imports: [HeaderComponent, ListParasiteQuestion, NavigateBack],
  templateUrl: './parasite-quiz.html',
  styleUrl: './parasite-quiz.css',
})
export class ParasiteQuiz {
  private activaRouter = inject(ActivatedRoute);
  private repository = inject(ParasiteQuizRepository);
  parasiteName = toSignal(this.activaRouter.params.pipe(map(params => params['parasite'])));
  questions = this.repository.getQuiz(this.parasiteName());
  isFormSumbit = signal(false);


  submitForm(event: Event) {
    event.preventDefault()
    this.isFormSumbit.set(true);
  }
}
