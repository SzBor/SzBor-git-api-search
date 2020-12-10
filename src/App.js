import React, { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import AppContext from './context';
import MainView from "./views/MainView";
import axios from 'axios';






function App() {

  const [repos, setRepos] = useState([])
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')



  const handleSearchChange = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios.get(`https://api.github.com/users/${username}`)
      .then(resp => {
        setRepos([...resp.data])
        setUsername('')
      })
      .catch(err => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }

      })

  }

  console.log(repos)

  const contextElements = {
    repos: repos,
    handleSubmit: handleSubmit,
    handleSearchChange: handleSearchChange,
  }



  return (
    <>
      <Header />
      <AppContext.Provider value={contextElements}>
        <Form />
        <MainView />
      </AppContext.Provider>
    </>
  );
}

export default App;
