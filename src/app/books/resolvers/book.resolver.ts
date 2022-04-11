import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver implements Resolve<Book> {

  constructor(private readonly booksService: BooksService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.booksService.findBookById(parseInt(route.paramMap.get('bookId')!));
  }
}
