import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { Book, DeleteBookDocument, GetAllBooksDocument } from 'src/app/generated-graphql/types.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books$: Observable<Book[]> = of([]);
  idToDelete: string = "";

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

  public deleteBook(id: string): void {
    this.apollo.mutate<{ deleteBookById: boolean; }>({
      mutation: DeleteBookDocument,
      variables: { id },
      update: (store, response) => {
        if (response?.data?.deleteBookById) {
          const allData = store.readQuery<{ books: Book[]; }>({
            query: GetAllBooksDocument
          });
          if (!!allData && !!allData.books) {
            const newData = [...allData.books].filter((book) =>
              book.id !== id
            );
            store.writeQuery<{ books: Book[]; }>({
              query: GetAllBooksDocument,
              data: { books: newData }
            });
          }
        }
      }
    }).subscribe();
  }

}
