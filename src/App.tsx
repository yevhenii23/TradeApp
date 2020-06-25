import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SupHeader from "./Components/SupHeader/SupHeader";

const App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <SupHeader/>
    </div>
  );
}

export default App;
