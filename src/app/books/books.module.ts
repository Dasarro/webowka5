import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { BookComponent } from './components/book/book.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './components/review/review.component';
import { AddReviewComponent } from './components/add-review/add-review.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookComponent,
    BookEditComponent,
    ReviewComponent,
    AddReviewComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
