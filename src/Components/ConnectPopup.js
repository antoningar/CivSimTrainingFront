import { useState } from "react";
import "./ConnectPopup.scss";

export function ConnectPopup({callback}) {
    const [conUsername, setConnUsername] = useState();
    const [conPasswd, setConnPasswd] = useState();

    const [regUsername, setRegUsername] = useState();
    const [regEmail, setRegEmail] = useState();
    const [regPasswd, setRegPasswd] = useState();
    const [regConfPasswd, setRegConfPasswd] = useState();

    const [showConfirmation, setShowConfirmation] = useState();
    const [isError, setIsError] = useState();

    function connect() {
        console.log(conUsername + conPasswd);
    }

    function register() {
        if (regPasswd !==  regConfPasswd) {
            setIsError(true);
            return;
        }
        setIsError(false);
        //sendMail()
        setShowConfirmation(true);
        console.log(regUsername + regEmail + regPasswd + regConfPasswd);
    }

    return (
        <div className="overlay">
            <div className="popup">
                {
                    showConfirmation && (
                        <div className="confirmation">
                            <h2>Thank you {regUsername}!</h2>
                            <label className="close" onClick={() => callback(false)}>&times;</label>
                            <label>
                                Check your mailbox to activate your account.
                            </label>
                            <button onClick={() => callback(false)}>Close</button>
                        </div>
                    )
                }
                {
                    !showConfirmation && (
                        <div>
                            <h2>Hello!</h2>
                            <label className="close" onClick={() => callback(false)}>&times;</label>
                            <div className="content">
                                <div className="login-container">
                                    <h3>Connexion</h3>
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
                                    <h3>Register</h3>
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
                    )
                } 
            </div>          
        </div>
    )
}