import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import AppContext from './context';
import MainView from "./views/MainView/MainView";
import axios from 'axios';
import { HashRouter, Route, Switch } from 'react-router-dom';
import AboutView from "./views/AboutView/AboutView";
import dataReducer from "./dataReducer"


const initialState = {
  repos: [],
  error: "",
};


function App() {

  const [state, dispatch] = useReducer(dataReducer, initialState);


    const fetchRepos = userName => {
      dispatch({
        type: "GET_REPOS_REQUEST"
      });
  
      axios.get(`https://api.github.com/users/${userName}/repos`, { params: { sort: "updated", order: "desc", page: 1 } })
        .then(resp => {
          dispatch({
            type: "GET_REPOS_SUCCESS",
            payload: resp.data
          })
          console.log(resp.data)
        })
        .catch(err => {
          console.log(err.message)
  
          dispatch({
            type: "GET_REPOS_FAILURE",
            error: err.message
          });
        })
    }



  const contextElements = {
    repos: state.repos.slice(0, 5),
    error: state.error,
    fetchRepos: fetchRepos,
  }


  return (
    <HashRouter basename="/">
      <Header />
      <AppContext.Provider value={contextElements}>
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/about" component={AboutView} />
        </Switch>
      </AppContext.Provider>
    </HashRouter>
  );
}

export default App;
