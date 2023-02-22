import { Address } from "./address";

export interface Author {
    name: string;
    originCountry: string;
    addresses: Address[];
}