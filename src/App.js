
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
