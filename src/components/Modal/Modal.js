import React from 'react';
import  style from './Modal.module.css';

const Modal = () => {
    return(
        <div className = {style.wrapper}>
            <div className = {style.sectionModal}>
                <img src = '' alt=''/>
                <div className = {style.contenDownloadButton}>
                    <ul>
                        <div> 
                            <div>
                                
                            </div>
                            <span>
                                Free download
                            </span>
                        </div>
                        <li>Size 1</li>
                        <li>Size 2</li>
                        <li>Size 3</li>
                    </ul>
                    <button className = {style.downloadButton}>
                        Иконка вниз
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;