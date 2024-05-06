import { useState } from 'react';

const Shape = (props) => {
    const [line, setLine] = useState();
    const [x, setX] = useState(50);
    const [dx, setDX] = useState(50);
    const [y, setY] = useState(50);
    const [dy, setDY] = useState(50);
    const [mx, setMX] = useState(50);
    const [my, setMY] = useState(50);
    const [nx, setNX] = useState(50);
    const [ny, setNY] = useState(50);

    if (props.type==="q"||props.type==="Q"){
        setMX(50)
        setMY(50)
        setDX(50)
        setDY(50)
    } else if (props.type==="c"||props.type==="C"){
        setMX(50)
        setMY(50)
        setNX(50)
        setNY(50)
        setDX(50)
        setDY(50)
    } else if (props.type==="t"||props.type==="T"){
        setDX(50)
        setDY(50)
    } else if (props.type==="l"||props.type==="L"||props.type==="v"||props.type==="V"||props.type==="h"||props.type==="H"){
        setDX(50)
        setDY(50)
    }
 

    function drawingLines(){
        const horizLines = horizontal(props.size)
        const vertLines = vertical(props.size)
        const svgns = "http://www.w3.org/2000/svg"
        const grid = document.getElementById("grid")
        horizLines.map((line, i) => {
            const path = document.createElementNS(svgns, 'path')
            path.setAttributeNS(null, 'd', `M ${line.x} ${line.y} l${line.dx} ${line.dy}`)
            path.setAttributeNS(null, 'stroke', "white")
            path.setAttributeNS(null, 'strokeWidth', 0.5)
            grid.appendChild(path)
            return grid
        })
        vertLines.map((line, i) => {
            const path = document.createElementNS(svgns, 'path')
            path.setAttributeNS(null, 'd', `M ${line.x} ${line.y} l${line.dx} ${line.dy}`)
            path.setAttributeNS(null, 'stroke', "white")
            path.setAttributeNS(null, 'strokeWidth', 0.5)
            grid.appendChild(path)
            return grid
        })
    }

        const viewbox = `0 0 ${props.size} ${props.size}`

    useEffect(() => {
        drawingLines()
    }, [])

    return(
        <div>
            <svg id="grid" height={props.size} width={props.size} viewBox={viewbox}>
                
            </svg>
        </div>
    )
}

export default Shape;