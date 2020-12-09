import React from 'react';
import AppContext from '../context';
import List from '../components/List/List';

const MainView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={context} />
    )}
  </AppContext.Consumer>
);

export default MainView;