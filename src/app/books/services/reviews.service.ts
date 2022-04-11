import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Review } from '../model/review';

const reviewApiPrefix = '/api/reviews';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  constructor(private readonly http: HttpClient) { }

  getAllReviewsForBook(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(`${reviewApiPrefix}?forBook=${id}`);
  }

  createReview(review: Review) {
    return this.http.post<Review>(reviewApiPrefix, review);
  }
}
