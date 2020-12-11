import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import AppContext from './context';
import MainView from "./views/MainView/MainView";
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutView from "./views/AboutView/AboutView";



const initialState = {
  repos: [],
  error: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REPOS_REQUEST":
      return {
        ...state,
        error: false,
      };
    case "GET_REPOS_SUCCESS":
      return {
        ...state,
        repos: action.payload,
      };
    case "GET_REPOS_FAILURE":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);



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
      })
      .catch(err => {
        console.log(err.message)

        dispatch({
          type: "GET_REPOS_FAILURE",
          error: true
        });
      })




  }








  const contextElements = {
    repos: state.repos.slice(0, 5),
    error: state.error,
    fetchRepos: fetchRepos,
  }


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
