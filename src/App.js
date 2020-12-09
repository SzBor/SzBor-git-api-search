import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import AppContext from './context';
import MainView from "./views/MainView";



const initialStateItems = [
  {
    name: "Dan Abramov",
    description: "React core member",
  }
];




function App() {

  const [value, setValue] = useState([...initialStateItems])

  return (
    <>
      <Header />
      <AppContext.Provider value={value}>
        <Form />
        <MainView />
      </AppContext.Provider>
    </>
  );
}

export default App;
