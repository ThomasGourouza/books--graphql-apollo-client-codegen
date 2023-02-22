import { Author } from "./author";
import { ReleaseHistory } from "./release-history";

export interface Book {
    title: string;
    publisher: string;
    author: Author;
    released: ReleaseHistory;
}