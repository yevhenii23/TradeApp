import React from "react";
import './Chat.css';
import { GoTrashcan } from 'react-icons/go';

const Chat:React.FC = () => {

    return (
        <div className="chatWrapper">
            <div>
                <div>
                    <div className="chatInfo">
                        <GoTrashcan className="iconTrash"/>
                        <h2>Amazon Gift Card</h2>
                        <h3>John Wick +37/-1</h3>
                    </div>
                </div>
                <div className="container">
                    <img alt="Avatar"/>
                    <p>Hello. How are you today?</p>
                    <span className="timeRight">11:00</span>
                </div>
                <form className="formWrapper">
                    <input type="text" placeholder="Type your message.." name="message"/>
                    <a><strong>Submit</strong></a>
                </form>
            </div>
        </div>
    );
}

export default Chat;