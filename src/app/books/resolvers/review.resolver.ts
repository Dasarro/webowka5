import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Review } from '../model/review';
import { ReviewsService } from '../services/reviews.service';

@Injectable({
  providedIn: 'root'
})
export class ReviewResolver implements Resolve<Review[]> {
  constructor(private readonly reviewService: ReviewsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Review[]> {
    return this.reviewService.getAllReviewsForBook(parseInt(route.paramMap.get('bookId')!));
  }
}
