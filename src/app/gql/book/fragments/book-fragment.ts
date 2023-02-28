import { gql } from "apollo-angular";
import { AUTHOR_FIELDS_RESULTS } from "./author-fragment";
import { RELEASE_FIELDS_RESULTS } from "./release-fragment";

export const BOOK_FIELDS_RESULTS = gql`
    fragment bookFields on Book {
        title
        publisher
        author {
            ...authorFields
        }
        released {
            ...releaseFields
        }
    }
    ${AUTHOR_FIELDS_RESULTS}
    ${RELEASE_FIELDS_RESULTS}
`;
