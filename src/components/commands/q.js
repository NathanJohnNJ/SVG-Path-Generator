import './commands.css';
import { useMousePosition } from '../useMousePosition';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Q = (props) => {
    const grid = document.getElementById('grid');
    const bigGrid = document.getElementById('');
    const mousePosition = useMousePosition();
    const [absRel, setAbsRel] = useState("q");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [zoom, setZoom] = useState(10);

    function openModal(){
        setModalIsOpen(true)
        props.toggle()
    }
    function closeModal(){
        setModalIsOpen(false)
    }
    function zoomIn(){
        let z=zoom*10;
        setZoom(z)
    }
    function zoomOut(){
        let z=zoom/10;
        setZoom(z)
    }

     const Grid = () =>{
        function row(){
            let a=0
            for (let j=0; j<20; j++){
                a+=1
                console.log("row has ran ", a, " times.")
                return(
                    <div style={{height: "10px", width:"10px", borderWidth: "0.5px", borderColor:"#ffffff", backgroundColor: "#3e3e3e", borderStyle:"solid"}}>{a}</div>
                )
            }
        }
        function grid(){
            for (let i=0; i<20; i++){
                return(
                    <div style={{display:"flex", flexDirection:"column"}}>
                        {row()}
                    </div>
                )
            }
        }
        const finalGrid = grid()
        return finalGrid
        
     }

    useEffect(()=>{
        if (props.type==="relative"){
            setAbsRel("q")
        } else {
            setAbsRel("Q")
        }
    })

//needs starting point, curve point and finishing point
//get initial size and base the grid for each command on the size needed.
    return (
        <div className="command">
            <button className="commandBtn" onClick={openModal}>{absRel}</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className="commandModal"
                >
                <div className="commandModalDiv">
                    <div className="close" onClick={closeModal}>X</div>
                    <div className="modalArea">
                        <div className="zoomedGrid" style={{height:"200px", width:"200px", backgroundColor:"#000000"}}>
                            <Grid />
                        </div>
                        <div className="zoomControls">
                            <div className="zoomIn" onClick={zoomIn}>+</div>
                            <div className="zoomOut" onClick={zoomOut}>-</div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default Q;