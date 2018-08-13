import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Feedback } from '../shared/feedback';
import { Restangular } from 'ngx-restangular';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular : Restangular) { }

  submitFeedback(feedback : Feedback): Observable<Feedback> {
    return this.restangular.all('feedbacks').post(feedback);
  }
}
