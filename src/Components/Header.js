import "./Header.css";

function ConnectButton({ className }) {
    return (
        <button className={className}>CONNECT</button>
    );
}

export function Header() {
    return (
        <div className="header">
            <label className="font-orange title">CIV SIM TRAINING</label>
            <ConnectButton className={"button font-orange"} />
        </div>
    )
}