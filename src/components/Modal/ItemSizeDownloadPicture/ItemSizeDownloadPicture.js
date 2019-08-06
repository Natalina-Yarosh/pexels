import React, {useState} from 'react';
import style from './ItemSizeDownloadPicture.module.css';
import download from 'downloadjs';

const ItemSizeDownloadPicture = ({resultIdRender}) => {
   
    console.log(resultIdRender)

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
            <form >
                    <h3 className = {style.listTitle}>Choose a size:</h3>
                    <ul className = {style.listAll}>

                        <li className = {style.listItem}>    
                            <label>                         
                                <input name = 'picture' type="radio"  value='original'  
                                 onChange = {(e) => {chekedSize(e)}}/>
                                <span className = {style.itemName}><strong>Original</strong> (5040 x 3360)</span>
                            </label>              
                        </li>

                        <li className = {style.listItem}>   
                            <label>                      
                                <input name = 'picture' type="radio" value='large'
                                 onChange = {(e) => {chekedSize(e)}} />
                                <span className = {style.itemName}><strong>Large</strong> (1920 x 1280)</span>
                            </label> 
                        </li>

                        <li className = {style.listItem}>  
                            <label>                         
                                <input name = 'picture' type="radio" value='medium'
                                 onChange = {(e) => {chekedSize(e)}}/>
                                <span className = {style.itemName}><strong>Medium</strong> (1280 x 853)</span>
                            </label>
                        </li>

                        <li className = {style.listItem}>
                            <label>
                                <input name = 'picture'  type="radio" value='small'
                                 onChange = {(e) => {chekedSize(e)}} />
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