import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IParams {
  startDate: string;
  endDate: string;
}

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

export const neoApi = createApi({
  reducerPath: 'neoApi',
  baseQuery: fetchBaseQuery({ baseUrl: $host }),
  endpoints: (build) => ({
    searchNeo: build.query<any, IParams>({
      query: (args: IParams) => ({
        url: '',
        params: {
          start_date: args.startDate,
          end_date: args.endDate,
          api_key: $key,
        },
      }),
    }),
  }),
});

export const { useSearchNeoQuery } = neoApi;
