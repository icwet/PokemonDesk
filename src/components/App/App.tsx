import React, { FC } from 'react';
import routes from 'routes';
import { useRoutes } from 'hookrouter';
import NotFound from 'pages/NotFound';

const App: FC = () => {
  return useRoutes(routes) || <NotFound />;
};

export default App;
