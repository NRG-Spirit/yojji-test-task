import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INeoResponse } from '../interfaces';

interface IParams {
  date: string;
}

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

export const neoApi = createApi({
  reducerPath: 'neoApi',
  baseQuery: fetchBaseQuery({ baseUrl: $host }),
  endpoints: (build) => ({
    searchNeo: build.query<INeoResponse, IParams>({
      query: (args: IParams) => ({
        url: '',
        params: {
          start_date: args.date,
          end_date: args.date,
          api_key: $key,
        },
      }),
    }),
  }),
});

export const { useSearchNeoQuery } = neoApi;
