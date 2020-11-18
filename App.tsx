import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import '@config/ReactotronConfig';

import { persistor, store } from '@store';

import RootNavigator from '@navigator/RootNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
