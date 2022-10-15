import React from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
