import React from 'react';

import createRouter from './routes';

function App() {
  const Routes = createRouter(true);
  return <Routes />;
}

export default App;
