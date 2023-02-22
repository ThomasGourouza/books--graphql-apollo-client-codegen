import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { GET_Books } from 'src/app/gql/book/book-query';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]> = of([]);

  constructor(
    private apollo: Apollo
  ) {
    // do something
  }

  ngOnInit(): void {
    this.books$ = this.apollo.watchQuery<{ books: Book[] }>(
      { query: GET_Books }
    ).valueChanges.pipe(
      map((result) => 
        result.data.books
      )
    );
  }

}
