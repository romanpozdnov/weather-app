import { configureStore } from 'redux-starter-kit';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import saga from 'sagas';
import reducer from 'reducers';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'test-task-persisted-store',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
export default store;
