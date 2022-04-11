import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';
import { Review } from '../../model/review';
import { BooksService } from '../../services/books.service';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'bs-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent {

  @Input() forBook!: number;

  @Output() submittedReview = new EventEmitter<Review>();

  readonly form: FormGroup;

  constructor(private readonly reviewService: ReviewsService) {
    this.form = new FormGroup({title: new FormControl('Title', Validators.required),
                               description: new FormControl('Description', Validators.required),
                               rate: new FormControl(5, [Validators.required, Validators.min(1), Validators.max(5)])});
  }

  onSubmit() {
    const object = this.form.value as Review;
    object.forBook = this.forBook;
    this.reviewService.createReview(object).subscribe(review => this.submittedReview.emit(review));
  }

}
