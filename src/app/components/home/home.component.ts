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
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  private getBooks(): void {
    this.books$ = this.apollo.watchQuery<{ books: Book[]; }>({
      query: GET_Books,
      fetchPolicy: 'no-cache'
    }).valueChanges.pipe(
      map((result) =>
        result.data.books
      )
    );
  }

  // private addBooks(bookName: string, authorName: string): void {
  //   this.apollo.mutate<{ books: Book[]; }>({
  //     mutation: GET_Books,
  //     variables: {
  //       name: bookName,
  //       author: authorName
  //     }
  //   }).subscribe((data) =>
  //     this.router.navigate(['/'])
  //   );
  // }

}
