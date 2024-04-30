import './commands.css';
import { useMousePosition } from '../useMousePosition';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Q = (props) => {
    const grid = document.getElementById('grid')
    const bigGrid = document.getElementById('')
    const mousePosition = useMousePosition()
    const [absRel, setAbsRel] = useState("q")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [zoom, setZoom] = useState(10)

    function openModal(){
        setModalIsOpen(true)
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
                        <div className="zoomedGrid">

                        </div>
                        <div className="zoomControls">
                            <div className="zoomIn" onClick={zoomIn}></div>
                            <div className="zoomOut" onClick={zoomOut}></div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
};

export default Q;