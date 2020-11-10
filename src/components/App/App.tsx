import { FC } from 'react';
import routes from 'routes';
import { useRoutes } from 'hookrouter';

const App: FC = () => {
  return useRoutes(routes);
};

export default App;
