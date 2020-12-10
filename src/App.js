import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import createRouter from './routes';
import { AuthProvider } from './auth/auth';
import { LojaProvider } from './data/Loja/Context';
import {CompraProvider} from './data/Loja/DataCarrinho'
function App() {
  const Routes = createRouter(true);
  return (
    <AuthProvider>
       <LojaProvider>
      <CompraProvider>
        <Routes />
        </CompraProvider>
      </LojaProvider>

    </AuthProvider>
  );
}

export default App;
