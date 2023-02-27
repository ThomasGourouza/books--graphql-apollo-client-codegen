import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { CREATE_Books } from 'src/app/gql/book/book-mutation';
import { GET_Books } from 'src/app/gql/book/book-query';
import { Book, BookInput } from 'src/app/models/book';

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
      mutation: CREATE_Books,
      variables: {
        bookInput: this.bookInput
      },
      // if we enable cache memory, we need to "manually" add the new book in the cache because it won't send any query in /home
      update: (store, response) => {
        if (response?.data?.addBook) {
          const allData = store.readQuery<{ books: Book[]; }>({
            query: GET_Books
          });
          if (allData && allData.books.length > 0) {
            const newData = [...allData.books];
            newData.push(response.data.addBook);

            store.writeQuery<{ books: Book[]; }>({
              query: GET_Books,
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
