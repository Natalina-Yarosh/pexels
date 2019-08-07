import React, {useState} from 'react';
import style from './ItemSizeDownloadPicture.module.css';
import download from 'downloadjs';

const ItemSizeDownloadPicture = ({resultIdRender}) => {
  
    const [changeSize, setChangeSize] = useState()

    const chekedSize = (e) => {
        let value = e.target.value        
        setChangeSize(changeSize => value)        
    }

    const downloadPicture = () => {              
        download(resultIdRender[0].src[changeSize]);
    }
    
    return (
        <div className = {style.listDownloadPicture}> 
            <form className = {style.customRadio}>
               
                    <h3 className = {style.listTitle}>Choose a size:</h3>
                    <ul className = {style.listAll}>

                        <li className = {style.listItem}>   
                            <input name = 'picture' type="radio"  value='original'  id='sizeOriginal' 
                                onChange = {(e) => {chekedSize(e)}}/>
                            <label for = 'sizeOriginal'>   
                                <span className = {style.itemName}><strong>Original</strong> (5040 x 3360)</span>
                            </label>              
                        </li>

                        <li className = {style.listItem}>   
                            <input name = 'picture' type="radio" value='large' id = 'sizeLarge'
                                onChange = {(e) => {chekedSize(e)}} />
                            <label for = 'sizeLarge'>  
                                <span className = {style.itemName}><strong>Large</strong> (1920 x 1280)</span>
                            </label> 
                        </li>

                        <li className = {style.listItem}>  
                            <input name = 'picture' type="radio" value='medium' id = 'sizeMedium'
                                onChange = {(e) => {chekedSize(e)}}/>
                            <label for = 'sizeMedium'> 
                                <span className = {style.itemName}><strong>Medium</strong> (1280 x 853)</span>
                            </label>
                        </li>

                        <li className = {style.listItem}>
                            <input name = 'picture'  type="radio" value='small' id = 'sizeSmall'
                                onChange = {(e) => {chekedSize(e)}} />
                            <label for = 'sizeSmall'> 
                                <span className = {style.itemName}><strong>Small</strong> (640 x 426)</span>
                            </label>
                        </li>
                        
                        </ul>
                        
                        <button className={style.iconDownload} onClick = {downloadPicture} type="button"> Free Download</button>
               
            </form>
        </div>
    )
}

export default ItemSizeDownloadPicture;