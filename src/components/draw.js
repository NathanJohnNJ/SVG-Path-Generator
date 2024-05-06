import './draw.css';
import { useState, useEffect } from 'react';
import Q from './commands/q';
import Grid from './grid';
import { useMousePosition } from './useMousePosition';

const Draw = () => {
    const [type, setType] = useState('relative');
    const [path, setPath] = useState("");
    const mousePosition = useMousePosition()
    

    function toggle(){
        const rel = document.getElementById('relative');
        const abs = document.getElementById('absolute');
        if (rel.style.backgroundColor === "rgb(0, 0, 0)"){
            rel.style.backgroundColor = "#4e4e4e"
            rel.style.color = "#ffffff"
            rel.classList.add("selected")
            abs.classList.remove("selected")
            abs.style.backgroundColor = "#000000"
            abs.style.color = "#4e4e4e"
            setType("relative")
        } else {
            rel.style.backgroundColor = "#000000"
            rel.style.color = "#4e4e4e"
            abs.style.backgroundColor = "#4e4e4e"
            abs.style.color = "#ffffff"
            abs.classList.add("selected")
            rel.classList.remove("selected")
            setType("absolute")
        }
    }
    function commandToggle(){
        const buttons = document.getElementById("commandBtns")
        const button = document.getElementById("commandBtn")
        if (buttons.style.display==="none"){
            button.classList.add("selected")
            buttons.style.display = "flex"
        }else{
            buttons.style.display = "none"
            button.classList.remove("selected")
        }
    }

    return (
        <div className="draw">
            <div className="typeSwitcher">
                <div className="switch" id="absolute" onClick={()=>toggle()}>Absolute</div>
                <div className="switch selected" id="relative" onClick={()=>toggle()}>Relative</div>
            </div>
            <div id="commandBtn" className="cmdBtn" onClick={() => commandToggle()}>
                <p>?</p>
            </div>
            <div id="commandBtns" className="commandBtns">
                <Q type={type} toggle={commandToggle} />
                <div className="command"  onClick={() => commandToggle()}>
                <button className="commandBtn">X</button>
                </div>
            </div>
            
            <div className="grid">
                <Grid size="200" />
            </div>
            {mousePosition.x}
            {mousePosition.y}
        </div>
    )
};

export default Draw;