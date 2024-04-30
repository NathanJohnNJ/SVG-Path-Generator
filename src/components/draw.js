import './draw.css';
import { useState, useEffect } from 'react';
import Q from './commands/q';
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
    return (
        <div className="draw">
            <div className="typeSwitcher">
                <div className="switch" id="absolute" onClick={()=>toggle()}>Absolute</div>
                <div className="switch selected" id="relative" onClick={()=>toggle()}>Relative</div>
            </div>
            <div className="commandBtns">
                <Q type={type} />
            </div>
            <div className="grid" id="grid">
                
            </div>
            {mousePosition.x}
            {mousePosition.y}
        </div>
    )
};

export default Draw;