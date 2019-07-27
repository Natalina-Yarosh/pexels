import React, { useEffect, useState } from "react";
import style from './HeaderBottom.module.css';
import Input from '../../Input/Input';
import { NavLink } from 'react-router-dom';

const HeaderBottom = ({ staticListOffesPictures, items,  value, getPictureAction, updateNewValueActionCreator }) => {
    
    console.log(items)

    const [query] = useState('background');

    useEffect(() => { 
        getPictureAction(query);    
    }, [getPictureAction, query]);

    console.log(items)
    
    let i =  Math.round( Math.random() * (items.length));
            
    let bannerInfoPhoto =  items.find((item, index)  =>  index === i ? (index < items.length-1 ? `${item},` : item) :'')        
        
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
            
    staticListOffesPictures.sort(compareRandom);
            
    let res = staticListOffesPictures.slice(0,7)
    
    const listItems = res.map((number) =>  <li key = {number}><NavLink to= {`/search/${number}`} className = {style.listItem}>{number}</NavLink></li> );
     
    return(
        <section className={style.headerBottom}>
                   
            <img                         
                className={style.img}
                src={bannerInfoPhoto && bannerInfoPhoto.src.large2x}
                alt=""
            /> 
            
            <div className={style.section}>
                <div className = {style.contentHeaderBorrom}>
                    <h1 className = {style.title}>
                        The best free stock photos & videos shared by talented creators.
                    </h1>
                    <Input 
                        value = {value} 
                        updateNewValueActionCreator = {updateNewValueActionCreator}
                        getPictureAction = {getPictureAction}
                    />
                    <div >
                        <ul className = {style.listSearch}><span>Suggested:</span>
                            {listItems}                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className = {style.subscribeHeaderButtom}>
                    <a 
                        href = {bannerInfoPhoto && bannerInfoPhoto.photographer_url} 
                        target = '_blank' 
                        rel="noreferrer noopener"
                    >
                        Photo by {bannerInfoPhoto && bannerInfoPhoto.photographer}
                    </a>
            </div>
        </section>

    )
    }


export default HeaderBottom;