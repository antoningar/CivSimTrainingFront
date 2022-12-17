import { useState } from "react";
import "./NewInstancePopup.scss";

const STEPS = [
    "BASE_SAVE", "BASE_STATS", "FINAL_SAVE", "FINAL_STATS"
]

function UploadSavePopup({setShowNewInstances, goToNextStep, title}) {
    const [file, setFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [isWrongExtension, setIsWrongExtension] = useState(false);

    function updateFile(e) {
        console.log(e.target.files[0]);
        if (e.target.files[0].name.split('.').pop() === "Civ6Save"){
            setIsWrongExtension(false);
            setFile(e.target.files[0]);
            setIsSelected(true);
            return;
        }
        setIsWrongExtension(true);
    }

    return (
        <div className="baseSaveContainer">
            <h2>{title}</h2>
            <label className="close" onClick={() => setShowNewInstances(false)}>&times;</label>
            <label className="label-upload">
                <input type="file" onChange={updateFile}/>
                Upload
            </label>
            {
                isSelected && (
                    <button onClick={() => goToNextStep(file)}>Continue</button>
                )
            }
            {
                isWrongExtension && (
                    <label className="form-error">Your file isn't a civ 6 game save !</label>
                )
            }
        </div>
    );
}

function BaseStats({setShowNewInstances, goToNextStep}) {
    // server mock
    let civ = "Dido";
    let turn = 1;
    let map  = "Inland Sea";
    let mods = "BBG 5.1.2, BBS 2.1.3";
    let creator  = "you";

    return (
        <div className="baseSaveContainer">
            <h2>Can you confirm informations ?</h2>
            <label className="close" onClick={() => setShowNewInstances(false)}>&times;</label>
            <div className="infos">
                <label>Civilization : {civ}</label>
                <label>Turn : {turn}</label>
                <label>Map : {map}</label>
                <label>Mods versions : {mods}</label>
                <label>Creator : {creator}</label>
            </div>
            <button onClick={goToNextStep}>Confirm</button>
        </div>
    );
}

function CustomStats({setShowNewInstances, goToNextStep}) {
    // server mock
    let turn = 50;
    let science  = 113;
    let culture = 92;
    let faithPT  = 2;
    let goldPT  = 57;

    const [goal, setGoal] = useState();

    function confirm() {
        if (goal) {
            goToNextStep();
        }
    }

    return (
        <div className="baseSaveContainer">
            <h2>Can you confirm informations ?</h2>
            <label className="close" onClick={() => setShowNewInstances(false)}>&times;</label>
            <div className="infos">
                <label>Turn : {turn}</label>
                <label>Science : {science}</label>
                <label>Culture : {culture}</label>
                <label>Faith per turn : {faithPT}</label>
                <label>Gold per turn : {goldPT}</label>
                <div className="select-container">
                    <label>Goal  :</label>
                    <select className="select" onChange={(e) => setGoal(e.target.value)}>
                        <option value=""></option>
                        <option value={"science turn " + turn}>{"Max science turn " + turn}</option>
                        <option value={"culture turn " + turn}>{"Max culture turn " + turn}</option>
                        <option value="science victory">Quickest science victory</option>
                        <option value="culture victory">Quickest culture victory</option>
                    </select>
                </div>
            </div>
            {
                goal && (
                    <button onClick={confirm}>Confirm</button>
                )                
            }
        </div>
    );
}

export function NewInstance({setShowNewInstances}){
    const [step, setStep] = useState(STEPS[0]);

    return (
        <div className="overlay">
            <div className="popup">
                {
                    step === STEPS[0] && (
                        <UploadSavePopup 
                            setShowNewInstances={setShowNewInstances}
                            goToNextStep={() => setStep(STEPS[1])}
                            title={"Upload your turn 1 save!"}
                        />
                    )                    
                }
                {
                    step === STEPS[1] && (
                        <BaseStats 
                            setShowNewInstances={setShowNewInstances}
                            goToNextStep={() => setStep(STEPS[2])}
                        />
                    )                    
                }
                {
                    step === STEPS[2] && (
                        <UploadSavePopup 
                            setShowNewInstances={setShowNewInstances}
                            goToNextStep={() => setStep(STEPS[3])}
                            title={"Upload your final save!"}
                        />
                    )                    
                }
                {
                    step === STEPS[3] && (
                        <CustomStats 
                            setShowNewInstances={setShowNewInstances}
                            goToNextStep={() => setShowNewInstances(false)}
                        />
                    )                    
                }
            </div>
        </div>
    );
}