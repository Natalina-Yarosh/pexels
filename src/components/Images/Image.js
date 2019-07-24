import React, { useEffect, useState } from "react";
import style from './Image.module.css';
import { connect } from 'react-redux';
import {getPictures} from '../../redux/getPicturesReducer';

const Images = ({ getPictureAction, items }) => { 
    const [query] = useState('cat');
      useEffect(() => {
      getPictureAction(query);
    }, [getPictureAction, query]);
  
    const listPictures = items.map((item) =>{

      return (
          
        <div className = {style.contentPicture}>
              
            <img className = {style.pictureItemSrc}
              src={item.src.original}
              alt=""
            />
            <article className={style.userInfoWrapper}>
              <div>
                <a href = "/" className={style.userInfo} >
                  <img
                    className={style.img}
                    src={item.url}
                    alt=""
                  />
                  <span ><a href = {item.photographer_url} className={style.userName} target = '_blank'>{item.photographer}</a></span>
                </a>
              </div>
              <button className={style.like}>
                <svg
                  className={style.likeNoActive}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                </svg>

                <svg
                  className={style.likeActive}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
            </article>
            
        </div>
          
      )
    } );
      
    return( 
      <section className={style.pictureItem}>
        {listPictures}
      </section>
    )

}

const mapStateToProps = state => {
  console.log(state)
  return {
    items: state.getPictures.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPictureAction: page => dispatch(getPictures(page))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(Images);

