import { gql } from "apollo-angular";
import { BOOK_FIELDS_RESULTS } from "./fragments/book-fragment";

export const CREATE_Books = gql`
    mutation newBook($bookInput: BookInput!) {
        addBook(bookInput: $bookInput) {
            ...bookFields
        }
    }
    ${BOOK_FIELDS_RESULTS}
`;