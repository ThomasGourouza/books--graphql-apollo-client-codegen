import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Book, BookInput, GetAllBooksDocument, AddBookDocument } from 'src/app/generated-graphql/types.generated';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookInput: BookInput = {
    title: "",
    publisher: "Rings",
    author: {
      name: "Obertone",
      originCountry: "France",
      addresses: [
        {
          street: "rue de la paix",
          city: "Paris",
          zipCode: "75000",
          country: "France"
        }
      ]
    },
    released: {
      year: 2023,
      printedEdition: true,
      releasedCountry: "France"
    }
  };

  constructor(
    private apollo: Apollo,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.apollo.mutate<{ addBook: Book; }>({
      mutation: AddBookDocument,
      variables: {
        bookInput: this.bookInput
      },
      // if we enable cache memory, we need to "manually" add the new book in the cache because it won't send any query in /home
      update: (store, response) => {
        if (response?.data?.addBook) {
          const allData = store.readQuery<{ books: Book[]; }>({
            query: GetAllBooksDocument
          });
          if (!!allData && !!allData.books) {
            const newData = [...allData.books];
            newData.push(response.data.addBook);

            store.writeQuery<{ books: Book[]; }>({
              query: GetAllBooksDocument,
              data: { books: newData }
            });
          }
        }
      }
    }).subscribe(() =>
      this.router.navigate(["/home"])
    );
  }

}
