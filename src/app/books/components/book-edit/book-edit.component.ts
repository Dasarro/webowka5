import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../model/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'bs-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {

  readonly form: FormGroup;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly booksService: BooksService, private readonly router: Router) {
    const book = this.activatedRoute.snapshot.data['book'];
    this.form = new FormGroup({id: new FormControl(book.id),
                               title: new FormControl(book.title, [Validators.required, Validators.maxLength(50)]),
                               author: new FormControl(book.author, [Validators.required, Validators.maxLength(50)]),
                               year: new FormControl(book.year, [Validators.min(1000), Validators.max(2023)]),
                               description: new FormControl(book.description, Validators.maxLength(1000))});
  }

  onSubmit() {
    this.booksService.saveBook(this.form.value as Book).subscribe(() => this.router.navigate(['/books']));
  }
}
