import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC-3339 compliant Full Date Scalar */
  Date: any;
  /** An RFC-3339 compliant DateTime Scalar */
  DateTime: any;
  /** An Int scalar that must be greater than or equal to zero */
  NonNegativeInt: any;
  /** A Url scalar */
  Url: any;
  _FieldSet: any;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  zipCode?: Maybe<Scalars['String']>;
};

export type AddressInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  street: Scalars['String'];
  zipCode?: InputMaybe<Scalars['String']>;
};

export type Author = {
  __typename?: 'Author';
  addresses: Array<Address>;
  name: Scalars['String'];
  originCountry?: Maybe<Scalars['String']>;
};

export type AuthorInput = {
  addresses: Array<AddressInput>;
  name: Scalars['String'];
  originCountry?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  id: Scalars['ID'];
  publisher: Scalars['String'];
  released?: Maybe<ReleaseHistory>;
  title: Scalars['String'];
};

export type BookInput = {
  author: AuthorInput;
  publisher: Scalars['String'];
  released?: InputMaybe<ReleaseHistoryInput>;
  title: Scalars['String'];
};

export type Cat = Pet & {
  __typename?: 'Cat';
  breed?: Maybe<Scalars['String']>;
  food?: Maybe<PetFoodType>;
  name: Scalars['String'];
  registry?: Maybe<Scalars['String']>;
};

/** Dog implements pet */
export type Dog = Pet & {
  __typename?: 'Dog';
  breed?: Maybe<Scalars['String']>;
  coatLength?: Maybe<Scalars['String']>;
  food?: Maybe<PetFoodType>;
  name: Scalars['String'];
  size?: Maybe<Scalars['String']>;
};

export enum ErrorDetail {
  /**
   * The deadline expired before the operation could complete.
   *
   * For operations that change the state of the system, this error
   * may be returned even if the operation has completed successfully.
   * For example, a successful response from a server could have been
   * delayed long enough for the deadline to expire.
   *
   * HTTP Mapping: 504 Gateway Timeout
   * Error Type: UNAVAILABLE
   */
  DeadlineExceeded = 'DEADLINE_EXCEEDED',
  /**
   * The server detected that the client is exhibiting a behavior that
   * might be generating excessive load.
   *
   * HTTP Mapping: 429 Too Many Requests or 420 Enhance Your Calm
   * Error Type: UNAVAILABLE
   */
  EnhanceYourCalm = 'ENHANCE_YOUR_CALM',
  /**
   * The requested field is not found in the schema.
   *
   * This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a
   * query is valid, but is unable to return a result (if, for example, a
   * specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be
   * returned by the server to signify that the requested field is not known to exist.
   * This may be returned in lieu of failing the entire query.
   * See also `PERMISSION_DENIED` for cases where the
   * requested field is invalid only for the given user or class of users.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: BAD_REQUEST
   */
  FieldNotFound = 'FIELD_NOT_FOUND',
  /**
   * The client specified an invalid argument.
   *
   * Note that this differs from `FAILED_PRECONDITION`.
   * `INVALID_ARGUMENT` indicates arguments that are problematic
   * regardless of the state of the system (e.g., a malformed file name).
   *
   * HTTP Mapping: 400 Bad Request
   * Error Type: BAD_REQUEST
   */
  InvalidArgument = 'INVALID_ARGUMENT',
  /**
   * The provided cursor is not valid.
   *
   * The most common usage for this error is when a client is paginating
   * through a list that uses stateful cursors. In that case, the provided
   * cursor may be expired.
   *
   * HTTP Mapping: 404 Not Found
   * Error Type: NOT_FOUND
   */
  InvalidCursor = 'INVALID_CURSOR',
  /**
   * Unable to perform operation because a required resource is missing.
   *
   * Example: Client is attempting to refresh a list, but the specified
   * list is expired. This requires an action by the client to get a new list.
   *
   * If the user is simply trying GET a resource that is not found,
   * use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE
   * is to be used particularly when the user is performing an operation
   * that requires a particular resource to exist.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   * Error Type: FAILED_PRECONDITION
   */
  MissingResource = 'MISSING_RESOURCE',
  /**
   * Service Error.
   *
   * There is a problem with an upstream service.
   *
   * This may be returned if a gateway receives an unknown error from a service
   * or if a service is unreachable.
   * If a request times out which waiting on a response from a service,
   * `DEADLINE_EXCEEDED` may be returned instead.
   * If a service returns a more specific error Type, the specific error Type may
   * be returned instead.
   *
   * HTTP Mapping: 502 Bad Gateway
   * Error Type: UNAVAILABLE
   */
  ServiceError = 'SERVICE_ERROR',
  /**
   * Request failed due to network errors.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  TcpFailure = 'TCP_FAILURE',
  /**
   * Request throttled based on server concurrency limits.
   *
   * HTTP Mapping: 503 Unavailable
   * Error Type: UNAVAILABLE
   */
  ThrottledConcurrency = 'THROTTLED_CONCURRENCY',
  /**
   * Request throttled based on server CPU limits
   *
   * HTTP Mapping: 503 Unavailable.
   * Error Type: UNAVAILABLE
   */
  ThrottledCpu = 'THROTTLED_CPU',
  /**
   * The operation is not implemented or is not currently supported/enabled.
   *
   * HTTP Mapping: 501 Not Implemented
   * Error Type: BAD_REQUEST
   */
  Unimplemented = 'UNIMPLEMENTED',
  /**
   * Unknown error.
   *
   * This error should only be returned when no other error detail applies.
   * If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Unknown = 'UNKNOWN'
}

export enum ErrorType {
  /**
   * Bad Request.
   *
   * There is a problem with the request.
   * Retrying the same request is not likely to succeed.
   * An example would be a query or argument that cannot be deserialized.
   *
   * HTTP Mapping: 400 Bad Request
   */
  BadRequest = 'BAD_REQUEST',
  /**
   * The operation was rejected because the system is not in a state
   * required for the operation's execution.  For example, the directory
   * to be deleted is non-empty, an rmdir operation is applied to
   * a non-directory, etc.
   *
   * Service implementers can use the following guidelines to decide
   * between `FAILED_PRECONDITION` and `UNAVAILABLE`:
   *
   * - Use `UNAVAILABLE` if the client can retry just the failing call.
   * - Use `FAILED_PRECONDITION` if the client should not retry until
   * the system state has been explicitly fixed.  E.g., if an "rmdir"
   *      fails because the directory is non-empty, `FAILED_PRECONDITION`
   * should be returned since the client should not retry unless
   * the files are deleted from the directory.
   *
   * HTTP Mapping: 400 Bad Request or 500 Internal Server Error
   */
  FailedPrecondition = 'FAILED_PRECONDITION',
  /**
   * Internal error.
   *
   * An unexpected internal error was encountered. This means that some
   * invariants expected by the underlying system have been broken.
   * This error code is reserved for serious errors.
   *
   * HTTP Mapping: 500 Internal Server Error
   */
  Internal = 'INTERNAL',
  /**
   * The requested entity was not found.
   *
   * This could apply to a resource that has never existed (e.g. bad resource id),
   * or a resource that no longer exists (e.g. cache expired.)
   *
   * Note to server developers: if a request is denied for an entire class
   * of users, such as gradual feature rollout or undocumented allowlist,
   * `NOT_FOUND` may be used. If a request is denied for some users within
   * a class of users, such as user-based access control, `PERMISSION_DENIED`
   * must be used.
   *
   * HTTP Mapping: 404 Not Found
   */
  NotFound = 'NOT_FOUND',
  /**
   * The caller does not have permission to execute the specified
   * operation.
   *
   * `PERMISSION_DENIED` must not be used for rejections
   * caused by exhausting some resource or quota.
   * `PERMISSION_DENIED` must not be used if the caller
   * cannot be identified (use `UNAUTHENTICATED`
   * instead for those errors).
   *
   * This error Type does not imply the
   * request is valid or the requested entity exists or satisfies
   * other pre-conditions.
   *
   * HTTP Mapping: 403 Forbidden
   */
  PermissionDenied = 'PERMISSION_DENIED',
  /**
   * The request does not have valid authentication credentials.
   *
   * This is intended to be returned only for routes that require
   * authentication.
   *
   * HTTP Mapping: 401 Unauthorized
   */
  Unauthenticated = 'UNAUTHENTICATED',
  /**
   * Currently Unavailable.
   *
   * The service is currently unavailable.  This is most likely a
   * transient condition, which can be corrected by retrying with
   * a backoff.
   *
   * HTTP Mapping: 503 Unavailable
   */
  Unavailable = 'UNAVAILABLE',
  /**
   * Unknown error.
   *
   * For example, this error may be returned when
   * an error code received from another address space belongs to
   * an error space that is not known in this address space.  Also
   * errors raised by APIs that do not return enough error information
   * may be converted to this error.
   *
   * If a client sees an unknown errorType, it will be interpreted as UNKNOWN.
   * Unknown errors MUST NOT trigger any special behavior. These MAY be treated
   * by an implementation as being equivalent to INTERNAL.
   *
   * When possible, a more specific error should be provided.
   *
   * HTTP Mapping: 520 Unknown Error
   */
  Unknown = 'UNKNOWN'
}

export type Hello = {
  __typename?: 'Hello';
  randomNumber?: Maybe<Scalars['Int']>;
  text: Scalars['String'];
};

export type HelloInput = {
  newText: Scalars['String'];
  number: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<Book>;
  addHello?: Maybe<Scalars['Int']>;
  deleteHello?: Maybe<Scalars['Int']>;
  replaceHelloText?: Maybe<Array<Maybe<Hello>>>;
  updateBook?: Maybe<Book>;
};


export type MutationAddBookArgs = {
  bookInput: BookInput;
};


export type MutationAddHelloArgs = {
  helloInput: HelloInput;
};


export type MutationDeleteHelloArgs = {
  number: Scalars['Int'];
};


export type MutationReplaceHelloTextArgs = {
  helloInput: HelloInput;
};


export type MutationUpdateBookArgs = {
  bookInput: BookInput;
  id: Scalars['String'];
};

/** Pet's name, make it <strong>cute</strong> */
export type Pet = {
  breed?: Maybe<Scalars['String']>;
  food?: Maybe<PetFoodType>;
  name: Scalars['String'];
};

export type PetFilter = {
  petType?: InputMaybe<Scalars['String']>;
};

/** This is a sample documentation on PetFoodType */
export enum PetFoodType {
  Carnivore = 'CARNIVORE',
  Herbivore = 'HERBIVORE',
  Omnivore = 'OMNIVORE'
}

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  additionalOnRequest?: Maybe<Scalars['String']>;
  allHellos?: Maybe<Array<Maybe<Hello>>>;
  bookById?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  booksByReleased?: Maybe<Array<Maybe<Book>>>;
  monAutreTest?: Maybe<Scalars['String']>;
  monTest?: Maybe<Scalars['String']>;
  oneHello?: Maybe<Hello>;
  pets?: Maybe<Array<Maybe<Pet>>>;
  smartSearch?: Maybe<Array<Maybe<SmartSearchResult>>>;
};


export type QueryBookByIdArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryBooksArgs = {
  author?: InputMaybe<Scalars['String']>;
};


export type QueryBooksByReleasedArgs = {
  releasedInput: ReleaseHistoryInput;
};


export type QueryMonAutreTestArgs = {
  uneVariable: ReleaseHistoryInput;
};


export type QueryMonTestArgs = {
  input: Scalars['String'];
};


export type QueryPetsArgs = {
  petFilter?: InputMaybe<PetFilter>;
};


export type QuerySmartSearchArgs = {
  keyword?: InputMaybe<Scalars['String']>;
};

export type ReleaseHistory = {
  __typename?: 'ReleaseHistory';
  printedEdition?: Maybe<Scalars['Boolean']>;
  releasedCountry?: Maybe<Scalars['String']>;
  year: Scalars['Int'];
};

export type ReleaseHistoryInput = {
  printedEdition?: InputMaybe<Scalars['Boolean']>;
  releasedCountry?: InputMaybe<Scalars['String']>;
  year: Scalars['Int'];
};

export type SmartSearchResult = Book | Hello;

export type Stock = {
  __typename?: 'Stock';
  lastTradeDateTime: Scalars['DateTime'];
  price: Scalars['NonNegativeInt'];
  symbol: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  randomStock?: Maybe<Stock>;
};

export type _Service = {
  __typename?: '_Service';
  sdl: Scalars['String'];
};

export type AddBookMutationVariables = Exact<{
  bookInput: BookInput;
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook?: { __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null } | null };

export type AddressFieldsFullFragment = { __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string };

export type AuthorFieldsFullFragment = { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> };

export type ReleaseFieldsFullFragment = { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null };

export type BookFieldsFullFragment = { __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null };

export type GetBookByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type GetBookByIdQuery = { __typename?: 'Query', bookById?: { __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null } | null };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['String'];
  bookInput: BookInput;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook?: { __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null } | null };

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null } | null> | null };

export type GetBooksByAuthorQueryVariables = Exact<{
  author?: InputMaybe<Scalars['String']>;
}>;


export type GetBooksByAuthorQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', id: string, title: string, publisher: string, author: { __typename?: 'Author', name: string, originCountry?: string | null, addresses: Array<{ __typename?: 'Address', street: string, city: string, zipCode?: string | null, country: string }> }, released?: { __typename?: 'ReleaseHistory', year: number, printedEdition?: boolean | null, releasedCountry?: string | null } | null } | null> | null };

export const AddressFieldsFullFragmentDoc = gql`
    fragment addressFieldsFull on Address {
  street
  city
  zipCode
  country
}
    `;
export const AuthorFieldsFullFragmentDoc = gql`
    fragment authorFieldsFull on Author {
  name
  originCountry
  addresses {
    ...addressFieldsFull
  }
}
    ${AddressFieldsFullFragmentDoc}`;
export const ReleaseFieldsFullFragmentDoc = gql`
    fragment releaseFieldsFull on ReleaseHistory {
  year
  printedEdition
  releasedCountry
}
    `;
export const BookFieldsFullFragmentDoc = gql`
    fragment bookFieldsFull on Book {
  id
  title
  publisher
  author {
    ...authorFieldsFull
  }
  released {
    ...releaseFieldsFull
  }
}
    ${AuthorFieldsFullFragmentDoc}
${ReleaseFieldsFullFragmentDoc}`;
export const AddBookDocument = gql`
    mutation addBook($bookInput: BookInput!) {
  addBook(bookInput: $bookInput) {
    ...bookFieldsFull
  }
}
    ${BookFieldsFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBookGQL extends Apollo.Mutation<AddBookMutation, AddBookMutationVariables> {
    override document = AddBookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBookByIdDocument = gql`
    query getBookById($id: String) {
  bookById(id: $id) {
    ...bookFieldsFull
  }
}
    ${BookFieldsFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBookByIdGQL extends Apollo.Query<GetBookByIdQuery, GetBookByIdQueryVariables> {
    override document = GetBookByIdDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateBookDocument = gql`
    mutation updateBook($id: String!, $bookInput: BookInput!) {
  updateBook(id: $id, bookInput: $bookInput) {
    ...bookFieldsFull
  }
}
    ${BookFieldsFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateBookGQL extends Apollo.Mutation<UpdateBookMutation, UpdateBookMutationVariables> {
    override document = UpdateBookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetAllBooksDocument = gql`
    query getAllBooks {
  books {
    ...bookFieldsFull
  }
}
    ${BookFieldsFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetAllBooksGQL extends Apollo.Query<GetAllBooksQuery, GetAllBooksQueryVariables> {
    override document = GetAllBooksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetBooksByAuthorDocument = gql`
    query getBooksByAuthor($author: String) {
  books(author: $author) {
    ...bookFieldsFull
  }
}
    ${BookFieldsFullFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetBooksByAuthorGQL extends Apollo.Query<GetBooksByAuthorQuery, GetBooksByAuthorQueryVariables> {
    override document = GetBooksByAuthorDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "Pet": [
      "Cat",
      "Dog"
    ],
    "SmartSearchResult": [
      "Book",
      "Hello"
    ]
  }
};
      export default result;
    
export const Operations = {
  Query: {
    getBookById: 'getBookById',
    getAllBooks: 'getAllBooks',
    getBooksByAuthor: 'getBooksByAuthor'
  },
  Mutation: {
    addBook: 'addBook',
    updateBook: 'updateBook'
  },
  Fragment: {
    addressFieldsFull: 'addressFieldsFull',
    authorFieldsFull: 'authorFieldsFull',
    releaseFieldsFull: 'releaseFieldsFull',
    bookFieldsFull: 'bookFieldsFull'
  }
}