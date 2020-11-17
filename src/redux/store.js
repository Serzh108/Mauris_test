import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { seriesSlice } from './seriesReduser';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = {
  [seriesSlice.name]: seriesSlice.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
