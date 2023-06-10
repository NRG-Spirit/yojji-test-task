import { configureStore } from '@reduxjs/toolkit';
import { neoApi } from './neoApi';

export const store = configureStore({
  reducer: {
    [neoApi.reducerPath]: neoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(neoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
