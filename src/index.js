import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import BookList from './components/book_list';
import BookShow from './components/book_show';
import reducers from "./reducers";
import './style.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/book/:id" component={BookShow} />
      </Switch>
    </div>
  </Router>
);

render(
<Provider store={createStoreWithMiddleware(reducers)}>
  <App />
</Provider>
  , document.getElementById('root'));
