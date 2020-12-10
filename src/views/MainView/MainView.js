import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';
import Form from '../../components/Form/Form';

const MainView = () => (
  <>
    <Form />
    <AppContext.Consumer>
      {(context) => (
        <List items={context.repos} />
      )}
    </AppContext.Consumer>
  </>
);

export default MainView;