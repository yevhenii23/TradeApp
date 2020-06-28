import React, { Fragment } from "react";
import "./Trades.css";

const TradesMock: Array<ITrades> = [
    {
        username: "John Wick",
        paymentMethod: "Amazon Gift Card",
        amount: 12,
        tradeStatus: true,
    },
    {
        username: "Chanaaar",
        paymentMethod: "ITunes Gift Card",
        amount: 57,
        tradeStatus: false,
    },
    {
        username: "Alexandra",
        paymentMethod: "Amazon Gift Card",
        amount: 12,
        tradeStatus: true,
    },
    {
        username: "John Wick",
        paymentMethod: "PayPal",
        amount: 12,
        tradeStatus: false,
    },
];

const Trades:React.FC = () => {
    return (
        <div className="TradesWrapper">
            {
            TradesMock.map(({username,paymentMethod,amount,tradeStatus},index) => {
                return <div className="CardWrapper" key={index}>
                    <div>
                        <span>{username} is buying</span>
                        <h3 className="Heading">{paymentMethod}</h3>
                        <span>{amount}</span>
                    </div>
                    <div>
                        <div>logo</div>
                        {
                            tradeStatus?<div className="Paid"><strong>Paid</strong></div>:<div><strong>Not Paid</strong></div>
                        }
                    </div>
                </div>
            })
            }
        </div>
    );
};

type ITrades = {
    username: string,
    paymentMethod: string,
    amount: number,
    tradeStatus: boolean,
}



export default Trades;