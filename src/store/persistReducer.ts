import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'desafio-vertigo',
      storage: AsyncStorage,
      whitelist: ['auth', 'pokemon'],
    },
    reducers
  );

  return persistedReducer;
};
