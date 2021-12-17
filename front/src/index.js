// == Import : npm
import React from 'react';
import { render } from 'react-dom';
// We import BrowserRouter component but we rename it to Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'src/store';

// == Import components
import ScrollToTop from 'src/components/ScrollToTop';
import RandoBiere from 'src/containers/RandoBiere';

// == Render
// 1. Root React Element (the one that contains all of the RandoBiere Component)
//    => create a structure of imbricated Objects (virtual DOM)
const rootReactElement = (
  // BrowserRouter must encompass our application (here our RandoBiere component)
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <RandoBiere />
    </Router>
  </Provider>
);
// 2. The DOM target (where the structure must come to life in the DOM)
const target = document.getElementById('root');
// 3. Trigger of the render in React (virtual) => DOM (web page)
render(rootReactElement, target);
