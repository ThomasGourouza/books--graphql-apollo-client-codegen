import { gql } from "apollo-angular";

export const ADDRESS_FIELDS_RESULTS = gql`
    fragment addressFields on Address {
        street
        city
        zipCode
        country
    }
`;
