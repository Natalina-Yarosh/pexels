import React from 'react';
import  style from './Modal.module.css';
import ItemSizeDownloadPicture from './ItemSizeDownloadPicture/ItemSizeDownloadPicture';


const Modal = (props) => {
    console.log(props.params)
    return(
        <section className = {style.wrapper}>
           
            <div className = {style.sectionModal}>
                <div>
                    <a href = '/'>
                        <img  className = {style.pictupeClose} src = 'https://www.tradeoakbuildingkits.com/wp-content/plugins/portfolio-filter-gallery-premium/img/x-close-icon-white.png' alt  = '' />
                    </a>
                </div>
                <img className = {style.pictureModal} src = 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg' alt=''/>
                <div className = {style.blockDownload}>

                    <div className = {style.contenDownloadButton}>
                            
                        <div className = {style.iconDownload}>
                            <span>
                                Free Download  
                            </span>
                        </div>                    
                        
                        <button className = {style.downloadButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="0.230in" height="0.140in">
                                <path fill-rule="evenodd" fill="rgb(255, 255, 255)" d="M3.138,0.522 L10.997,8.379 L18.958,0.417 L18.959,0.418 C19.229,0.159 19.596,-0.002 20.000,-0.002 C20.828,-0.002 21.500,0.669 21.500,1.498 C21.500,1.903 21.340,2.269 21.079,2.540 L21.080,2.540 L12.080,11.540 L12.079,11.539 C11.807,11.821 11.424,11.997 11.000,11.997 C10.999,11.997 10.998,11.997 10.997,11.997 C10.996,11.997 10.994,11.997 10.993,11.997 C10.569,11.997 10.187,11.821 9.914,11.539 L9.914,11.540 L0.913,2.540 L0.917,2.536 C0.659,2.267 0.500,1.901 0.500,1.498 C0.500,0.669 1.172,-0.002 2.000,-0.002 C2.455,-0.002 2.862,0.201 3.138,0.522 Z"></path>
                            </svg>
                        </button>
                       
                    </div>
                    <div className = {style.hoverSizeDownloadPicture}>
                        <ItemSizeDownloadPicture />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Modal;