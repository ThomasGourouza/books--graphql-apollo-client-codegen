import { gql } from "apollo-angular";

export const GET_Books = gql `query {
    books {
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