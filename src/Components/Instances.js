import "./Instances.css";

function NewInstanceButton({ className }) {
    return (
        <button className={className}>NEW INSTANCE</button>
    );
}

function FilterInstanceButton({ className }) {
    return (
        <div>
            <input type="checkbox" id="filter-checkbox"/>
            <label  className="filter-label" for="filter-checkbox">Filter By</label>
            <div className="dropdown-options">
                <div className="options-civ">Civilization</div>
                <div className="dropdown-civs">
                    <a href="#">Dido</a>
                    <a href="#">Trajan</a>
                </div>
                <div className="options-map">Map</div>
                <div className="dropdown-maps">
                    <a href="#">Seven Seas</a>
                    <a href="#">Pangea</a>
                </div>
                <div className="options-goal">Goal</div>
                <div className="dropdown-goals">
                    <a href="#">Science Victory</a>
                    <a href="#">Cultural Victory</a>
                </div>
            </div>
        </div>
    );
}

function ListInstances() {
    return (
        <div>

        </div>
    );
}

export function Instances() {
    return (
        <div className="instances">
            <div className="utils">
                    <NewInstanceButton className={"button"}/>
                    <FilterInstanceButton className={"filter-button"}/>
            </div>
            <div className="list-instances">
                <ListInstances />
            </div>
        </div>
    );
}