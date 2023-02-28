import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { Book, GetAllBooksDocument } from 'src/app/generated-graphql/types.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]> = of([]);

  constructor(
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this.books$ = this.apollo.watchQuery<{ books: Book[]; }>({
      query: GetAllBooksDocument,
      // fetchPolicy: 'no-cache'
    }).valueChanges.pipe(
      map((result) =>
        result.data.books
      )
    );
  }

}
