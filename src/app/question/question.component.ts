import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizDataService } from '../quiz-data.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IQuestion } from '../i-question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  private questionSubscribtion: Subscription;
  private slugSubscribtion: Subscription;

  questions$: IQuestion[];
  questionStep$: number;

  payDayOptions = [3, 7, 12, 17, 22, 27];

  constructor(private quizData: QuizDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.slugSubscribtion = this.route.params.subscribe(params => this.questionStep$ = parseInt(params.step, 10));
    this.questionSubscribtion = this.quizData.getQuestions().subscribe((data: IQuestion[]) => this.questions$ = data);
  }

  ngOnDestroy() {
    this.slugSubscribtion.unsubscribe();
    this.questionSubscribtion.unsubscribe();
  }
}
