import { useState } from "react";
import  { ConnectPopup } from "./ConnectPopup";
import "./Header.css";

function ConnectButton() {
    const [showConnect, setShowConnect] = useState(false);

    function clickConnect() {
        setShowConnect(true);
    }

    function connectCallback(isConnect) {
        setShowConnect(isConnect);
    }

    return (
        <div>
            <button onClick={clickConnect}>CONNECT</button>
            {
                showConnect && (
                    <ConnectPopup callback={connectCallback}/>
                )
            }
        </div>
    );
}

export function Header() {
    return (
        <div className="header">
            <label className="title">CIV SIM TRAINING</label>
            <ConnectButton />
        </div>
    )
}