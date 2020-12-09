import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createRouter from './routes';
import { AuthProvider } from './auth/auth';
import { LojaProvider } from './data/Loja/Context';
function App() {
  const Routes = createRouter(true);
  return (
    <AuthProvider>
      <LojaProvider>
        <Routes />
      </LojaProvider>
    </AuthProvider>
  );
}

export default App;
