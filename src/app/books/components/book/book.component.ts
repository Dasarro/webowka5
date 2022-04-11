import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../model/book';
import { Review } from '../../model/review';

@Component({
  selector: 'bs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  readonly book: Book;
  readonly reviews: Review[];

  constructor(private readonly activatedRoute: ActivatedRoute) {
    this.book = this.activatedRoute.snapshot.data['book'];
    this.reviews = this.activatedRoute.snapshot.data['reviews'];
  }

  onReviewSubmitted(review: Review) {
    this.reviews.push(review);
  }
}
