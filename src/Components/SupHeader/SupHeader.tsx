import React from 'react';
import "./SupHeader.css";

const SupHeader:React.FC = () => {
    return (
        <div className="SupHeaderWrapper">
            <ul className="SupListWrapper">
                <li>Overview</li>
                <li>Trades</li>
                <li>Disputes</li>
                <li>Your Offers</li>
                <li>My team</li>
                <li>Trade History</li>
            </ul>
        </div>
    );
};

export default SupHeader;