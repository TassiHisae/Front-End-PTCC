import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createRouter from './routes';
import { store, persistor } from './store';
function App() {
  const Routes = createRouter(true);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
