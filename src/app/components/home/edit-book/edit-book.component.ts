import { Component, OnInit } from '@angular/core';
import { BookInput } from 'src/app/generated-graphql/types.generated';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  public update() : void {

  }

}
