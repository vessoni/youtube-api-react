import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search'
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/search/:item" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}
