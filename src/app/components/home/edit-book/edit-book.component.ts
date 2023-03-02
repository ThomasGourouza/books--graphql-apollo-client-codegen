import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Book, BookInput, GetAllBooksDocument, GetBookByIdDocument, UpdateBookDocument } from 'src/app/generated-graphql/types.generated';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  private bookId: string = "";

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
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params => {
      this.bookId = params['id'];
      this.getBookById(this.bookId);
    }));
  }

  private getBookById(id: string): void {
    this.apollo.watchQuery<{ bookById: Book; }>({
      query: GetBookByIdDocument,
      variables: { id }
      // fetchPolicy: 'no-cache'
    })
    .valueChanges
    .subscribe((result) =>
      this.bookInput.title = result.data.bookById.title
    );
  }

  public update() : void {
    this.apollo.mutate<{ updateBook: Book; }>({
      mutation: UpdateBookDocument,
      variables: {
        id: this.bookId,
        bookInput: this.bookInput
      }
    }).subscribe(() =>
      this.router.navigate(["/home"])
    );
  }

}
