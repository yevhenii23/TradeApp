import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SupHeader from "./Components/SupHeader/SupHeader";
import Trades from "./Components/Trades/Trades";
import Chat from "./Components/Chat/Chat";
import TradeInfo from "./Components/TradeInfo/TradeInfo";

const App:React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <SupHeader/>
      <div className="ComponentsWrapper">
          <Trades/>
          <Chat/>
          <TradeInfo/>
      </div>
    </div>
  );
}

export default App;
