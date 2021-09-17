﻿import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistReducers = persistReducer(
    {
      key: 'API-CONSUME',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );
  return persistReducers;
};
