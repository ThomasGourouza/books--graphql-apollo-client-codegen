import { gql } from "apollo-angular";

export const RELEASE_FIELDS_RESULTS = gql`
    fragment releaseFields on ReleaseHistory {
        year
        printedEdition
        releasedCountry
    }
`;
  