import "./ConnectPopup.scss";

export function ConnectPopup() {
    return (
        <div className="overlay">
            <div className="popup">
                <h2>Connexion</h2>
                <a className="close" href="/">&times;</a>
                <div className="content">
                    Thank to pop me out of that button, but now i'm done so you can close this window.
                </div>
            </div>            
        </div>
    )
}