import { useState } from "react";
import { NewInstance } from "./NewInstancePopup";
import "./Toolbar.scss";

function NewInstanceButton({setShowNewInstances}) {
    return (
        <div>
            <button
                className="toolbar-button"
                onClick={() => setShowNewInstances(true)}
            >New instance</button>
        </div>
    );
}

function FilterInstanceButton({ className }) {
    function sortByCiv(e){
        setExpend(false);
        console.log(e.target.innerHTML);
    }

    function sortByMap(e){
        setExpend(false);
        console.log(e.target.innerHTML);
    }

    function sortByGoal(e){
        setExpend(false);
        console.log(e.target.innerHTML);
    }

    const [expend, setExpend] = useState(false);
    return (
        <div>
            <input
                type="checkbox" id="filter-checkbox" checked={expend} 
                onChange={(e) => {setExpend(e.target.checked ?  true : false)}}
            />
            <label className="filter-label" htmlFor="filter-checkbox">Filter by</label>
            <div className="dropdown-options">
                
                <input type="checkbox" id="civ-checkbox"/>
                <label className="options-civ dropdown-select" htmlFor="civ-checkbox">Civilization</label>
                <div className="dropdowns  dropdown-civs">
                    <label className="dropdown-select" onClick={sortByCiv}>Dido</label>
                    <label className="dropdown-select" onClick={sortByCiv}>Trajan</label>
                </div>

                <input type="checkbox" id="map-checkbox"/>
                <label className="options-map dropdown-select" htmlFor="map-checkbox">Map</label>
                <div className="dropdowns dropdown-maps">
                    <label className="dropdown-select" onClick={sortByMap}>Seven Seas</label>
                    <label className="dropdown-select" onClick={sortByMap}>Pangea</label>
                </div>

                <input type="checkbox" id="goal-checkbox"/>
                <label className="options-goal dropdown-select" htmlFor="goal-checkbox">Goal</label>
                <div className="dropdowns dropdown-goals">
                    <label className="dropdown-select" onClick={sortByGoal}>Science Victory</label>
                    <label className="dropdown-select" onClick={sortByGoal}>Cultural Victory</label>
                </div>
            </div>
        </div>
    );
}

function SearchBox() {
    const [searchValue, setSearchValue] = useState("");

    function handleSearch(e){
        if (e.key ===  "Enter") {
            search()
        }
    }

    function search() {
        console.log(searchValue);
    }

    return (
        <div className="cover">
            <input 
                type="text" placeholder="Search" 
                onKeyDown={handleSearch}
                onChange={(e) => setSearchValue(e.target.value)}    
            />
            <div className="search icon" onClick={search}></div>
        </div>
    );
}

function ListInstances() {
    return (
        <div>
        </div>
    );
}

export function ToolBar() {
    const [showNewInstances, setShowNewInstances]  = useState(false);

    return (
        <div>
            { showNewInstances && (<NewInstance setShowNewInstances={setShowNewInstances}/>) }
            <div className="toolbar">
                <div className="utils">
                        <NewInstanceButton setShowNewInstances={setShowNewInstances}/>
                        <SearchBox />
                        <FilterInstanceButton className={"filter-button"}/>
                </div>
                <div className="list-instances">
                    <ListInstances />
                </div>
            </div>
        </div>
    );
}