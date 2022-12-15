import { useState } from "react";
import "./ConnectPopup.scss";

export function ConnectPopup() {
    const [conUsername, setConnUsername] = useState("");
    const [conPasswd, setConnPasswd] = useState("");

    const [regUsername, setRegUsername] = useState("");
    const [regEmail, setRegEmail] = useState("");
    const [regPasswd, setRegPasswd] = useState("");
    const [regConfPasswd, setRegConfPasswd] = useState("");

    const [isError, setIsError] = useState(false);

    function connect() {
        console.log(conUsername + conPasswd);
    }

    function register() {
        if (regPasswd !==  regConfPasswd) {
            setIsError(true);
            return;
        }
        setIsError(false);
        console.log(regUsername + regEmail + regPasswd + regConfPasswd);
    }

    return (
        <div className="overlay">
            <div className="popup">
                <h2>Hello!</h2>
                <a className="close" href="/">&times;</a>
                <div className="content">
                    <div className="login-container">
                        Connexion
                        <div className="connexion-form connect">
                            <input 
                                type="text" placeholder="username"
                                required minLength="4" maxLength="16" pattern="^[a-zA-Z0-9_]*$"
                                onChange={(e) => setConnUsername(e.target.value)}
                            />
                            <input 
                                type="password" placeholder="password" 
                                required minLength="8" 
                                onChange={(e) => setConnPasswd(e.target.value)}
                            />
                            <button className="submit-button" onClick={connect}>CONNECT</button>
                        </div>
                    </div>
                    <div className="create-container">
                        Register
                        <div className="connexion-form">
                            <input 
                                type="text" placeholder="username" 
                                required minLength="4" maxLength="16" pattern="^[a-zA-Z0-9_]*$"
                                onChange={(e) => setRegUsername(e.target.value)}
                            />
                            <input 
                                type="text" placeholder="email"
                                required pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$"
                                onChange={(e) => setRegEmail(e.target.value)}
                            />
                            <input 
                                type="password" placeholder="password" 
                                required minLength="8"
                                onChange={(e) => setRegPasswd(e.target.value)}
                            />
                            <input 
                                type="password" placeholder="confirm password" 
                                required minLength="8"
                                onChange={(e) => setRegConfPasswd(e.target.value)}
                            />
                            {
                                isError && (
                                    <label className="form-error">passwords doesn't match !</label>
                                )
                            }
                            <button className="submit-button" onClick={register}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}