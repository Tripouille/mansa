import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Company, CompanyQueryResponse } from './types';

export const BASE_URL = 'https://entreprise.data.gouv.fr/api/sirene/v3';

export enum Endpoints {
  COMPANY = 'unites_legales/852379890',
}

export const company = createApi({
  reducerPath: 'company',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['company'],
  endpoints: builder => ({
    company: builder.query<Company, void>({
      query: () => ({
        url: Endpoints.COMPANY,
      }),
      transformResponse(params: CompanyQueryResponse) {
        return params.unite_legale;
      },
    }),
  }),
});

export const { useCompanyQuery } = company;
