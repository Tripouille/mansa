export interface User {
  name: {
    first: string;
    last: string;
  };
}

export type UserQueryResponse = { results: User[] };
