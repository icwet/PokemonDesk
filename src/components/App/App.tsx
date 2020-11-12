import React, { FC } from 'react';
// Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
// Routing
import routes, { LinkEnum } from 'routes';
import { usePath, useRoutes } from 'hookrouter';

const App: FC = () => {
  const match = useRoutes(routes);
  const currentPath = usePath();
  return (
    (
      <>
        <Header />
        {match}
        <Footer theme={currentPath === LinkEnum.HOME ? 'yellow' : 'transparent'} />
      </>
    ) || <NotFound />
  );
};

export default App;
