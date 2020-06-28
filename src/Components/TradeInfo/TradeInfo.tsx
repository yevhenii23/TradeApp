import React from "react";
import  './TradeInfo.css';

const TradeInfo:React.FC = () => {
    return (
        <div className="TradeInfoWrapper">
            <h3> You are trading with John Wick</h3>
            <p> Starte 23 minutes ago</p>
            <button> Release bitcoins</button>
            
        </div>
    );
};

export default TradeInfo;