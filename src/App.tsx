import React from 'react'
import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {
  BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from './components/main-page';

const WebStyles = styled.div`

  //width: 100vw;
  display: flex;
  flex-direction: column;
  height: 100vh;
  #InputForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 60%; 
  }
`;

const App = () => {
 
  return (
    <WebStyles>
      <Router>
      <Switch>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </WebStyles>

  )
}

export default App;


