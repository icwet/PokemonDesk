import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { setPath } from 'hookrouter';
import App from '../components/App/App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
  await server.register(Inert);

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request) => {
      const pathToIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathToIndexHTML, 'utf-8'));
      const AppComponent = renderToString(<App />);
      const page = template({
        content: AppComponent,
      });
      setPath(request.path);
      return page;
    },
  });
  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
