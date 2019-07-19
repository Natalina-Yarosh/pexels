import React from 'react';
import style from './ItemSizeDownloadPicture.module.css';

const ItemSizeDownloadPicture = () => {
    return (
        <div className = {style.listDownloadPicture}>
            <form >
                    <h3 className = {style.listTitle}>Choose a size:</h3>
                    <ul className = {style.listAll}>
                        <li className = {style.listItem}>                            
                                <input type="radio" value="5040x3360"/>
                                <span className = {style.itemName}><strong>Original</strong> (5040 x 3360)</span>              
                        </li>

                        <li className = {style.listItem}>
                          
                            <input type="radio" value="1920x1280"/>
                            <span className = {style.itemName}><strong>Large</strong> (1920 x 1280)</span>
                            
                        </li>

                        <li className = {style.listItem}>
                            
                            <input type="radio" value="1280x853"/>
                            <span className = {style.itemName}><strong>Medium</strong> (1280 x 853)</span>
                            
                        </li>

                        <li className = {style.listItem}>
                        <label>
                        <input type="radio" value="640x426"/>
                        <span className = {style.itemName}><strong>Small</strong> (640 x 426)</span>
                        </label>
                        </li>
                        
                        </ul>
                        
                        <button className={style.iconDownload} > Free Download</button>
                    
            </form>
        </div>
    )
}

export default ItemSizeDownloadPicture;