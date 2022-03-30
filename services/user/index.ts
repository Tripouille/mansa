import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserQueryResponse } from './types';

export const user = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me',
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    user: builder.query<User, void>({
      query: () => ({
        url: 'api',
      }),
      transformResponse(params: UserQueryResponse) {
        return params.results[0];
      },
    }),
  }),
});

export const { useUserQuery } = user;
