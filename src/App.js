import React from 'react';
import Header from './components/Header';
import Maininfo from './components/MainInfo/Maininfo';
import Cards from './components/Cards';
import AdditionalInfo from './components/AdditionalInfo';
import Questions from './components/Questions';

function App() {
  return (
    <div className="App">
      <Header />
      <Maininfo />
      <Cards />
      <AdditionalInfo />
      <Questions />
    </div>
  );
}

export default App;
