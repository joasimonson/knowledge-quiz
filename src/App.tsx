import React from 'react';
import Router from './Router';
import { makeServer } from './server';

makeServer();

const App: React.FC = () => {
  return (
    <Router />
  );
};

export default App;