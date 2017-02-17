import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Article from './pages/article.md';

console.log(ReactDOMServer.renderToString(<Article />));
