export enum AccountType {
  TRANSACTION = 'TRANSACTION',
  SAVINGS = 'SAVINGS',
}

export interface Account {
  account_number: string;
  available: number;
  currency: string;
  account_type: AccountType;
}

export type AccountsQueryResponse = Account[];
