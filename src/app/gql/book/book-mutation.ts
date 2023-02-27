import { gql } from "apollo-angular";

export const CREATE_Books = gql`mutation newBook($bookInput: BookInput!) {
    addBook(bookInput: $bookInput) {
        title
        publisher
        author {
            name
            originCountry
            addresses {
            street
            city
            zipCode
            country
            }
        }
        released {
            year
            printedEdition
            releasedCountry
        }
    }
  }`;