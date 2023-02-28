import { gql } from "apollo-angular";
import { BOOK_FIELDS_RESULTS } from "./fragments/book-fragment";

export const GET_Books = gql`
  query {
    books {
      ...bookFields
    }
  }
  ${BOOK_FIELDS_RESULTS}
`;
