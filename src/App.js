import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import AppContext from './context';
import MainView from "./views/MainView/MainView";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from "./views/AboutView/AboutView";



function App() {

  const [repos, setRepos] = useState([])
  const [error, setError] = useState(false)
  const [errorRequest, setErrorRequest] = useState(false)

  const [username, setUsername] = useState('')

  const handleSearchChange = (e) => {
    setUsername(e.target.value)
  }


  const handleSubmit = event => {

    event.preventDefault()
    axios.get(`https://api.github.com/users/${username}/repos`, { params: { sort: "updated", order: "desc", page: 1 } })
      .then(resp => {
        setRepos([...resp.data])
        setUsername('')
        setError(false)
        setErrorRequest(false)
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response)

          setError(true)

        } else if (err.request) {

          setErrorRequest(true)

        } else {

          console.log(error.message);
        }

      })
  }


  const contextElements = {
    repos: repos.slice(0, 5),
    handleSubmit: handleSubmit,
    handleSearchChange: handleSearchChange,
    error: error,
  }

  console.log(contextElements.error)

  return (
    <BrowserRouter>
      <Header />
      <AppContext.Provider value={contextElements}>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/about" component={AboutView} />
        </Switch>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
