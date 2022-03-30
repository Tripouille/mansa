import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserQueryResponse } from './types';

export const BASE_URL = 'https://randomuser.me';

export enum Endpoints {
  USER = 'api',
}

export const user = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    user: builder.query<User, void>({
      query: () => ({
        url: Endpoints.USER,
      }),
      transformResponse(params: UserQueryResponse) {
        return params.results[0];
      },
    }),
  }),
});

export const { useUserQuery } = user;
