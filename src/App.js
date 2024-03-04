import React from 'react';
import Header from './components/Header';
import Maininfo from './components/MainInfo/Maininfo';
import Cards from './components/Cards';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';

function App() {
  return (
    <div className="App">
      <Header />
      <Maininfo />
      <Cards />
      <AdditionalInfo />
    </div>
  );
}

export default App;
