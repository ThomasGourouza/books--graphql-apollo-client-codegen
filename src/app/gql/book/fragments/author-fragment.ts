import { gql } from "apollo-angular";
import { ADDRESS_FIELDS_RESULTS } from "./address-fragment";

export const AUTHOR_FIELDS_RESULTS = gql`
  fragment authorFields on Author {
      name
      originCountry
      addresses {
        ...addressFields
      }
  }
  ${ADDRESS_FIELDS_RESULTS}
`;
