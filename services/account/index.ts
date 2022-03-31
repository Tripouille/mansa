import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccountsQueryResponse } from './types';

export const BASE_URL = 'https://kata.getmansa.tech';

export enum Endpoints {
  ACCOUNTS = 'accounts',
}

export const account = createApi({
  reducerPath: 'account',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['account'],
  endpoints: builder => ({
    accounts: builder.query<AccountsQueryResponse, void>({
      query: () => ({
        url: Endpoints.ACCOUNTS,
      }),
    }),
  }),
});

export const { useAccountsQuery } = account;
