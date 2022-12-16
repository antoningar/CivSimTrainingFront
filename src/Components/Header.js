import { useState } from "react";
import  { ConnectPopup } from "./ConnectPopup";
import "./Header.css";

export function Header() {
    const [showConnect, setShowConnect] = useState();

    function clickConnect(show) {
        setShowConnect(show);
    }

    function connectCallback(isConnect) {
        setShowConnect(isConnect);
    }

    return (
        <div className="header">
            <label className="title">CIV SIM TRAINING</label>
            <div>
                <button className="connect-button" onClick={clickConnect}>CONNECT</button>
                {
                    showConnect && (
                        <ConnectPopup callback={connectCallback}/>
                    )
                }
            </div>
        </div>
    )
}