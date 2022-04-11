import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../model/review';

@Component({
  selector: 'bs-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review!: Review;
}
