import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   // persistStore,
//   // persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { seriesSlice } from './seriesReduser';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    // {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
  }),
];

const rootReducer = {
  [seriesSlice.name]: seriesSlice.reducer,
};

// const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: rootReducer,
  middleware,
});
// export const persistor = persistStore(store);
