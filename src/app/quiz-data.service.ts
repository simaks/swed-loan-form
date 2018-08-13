import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion } from './i-question';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  private payDayOptions = new BehaviorSubject<number[]>([3, 7, 12, 17, 22, 27]);

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get('/assets/questions.json');
  }

  setActiveQuestion(question: IQuestion) {
    // this.activeQuestion.next(question);
  }

  getActiveQuestion() {
    // return this.activeQuestion.asObservable();
  }
}
