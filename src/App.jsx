import React from "react";
import { Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
  }
  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background: darkgray;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }
  body {
    font-family: "Montserrat", sans-serif;
    width: 100%;
  }
  h2 {
    font-family: "Abril Fatface", cursive;
    font-size: 3rem;
    font-weight: lighter;
    color: #333;
  }
  h3 {
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
  }
  a{
    text-decoration: none;
    color: #696969;
  }
  img {
    display: block;
  }
`;

export default App;
