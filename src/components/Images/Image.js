import React from 'react';
import style from './Image.module.css';
//import * as axios from 'axios';

class Images extends React.Component {
    
    componentDidMount(){

        const query = "dog";

        fetch(
          `https://api.pexels.com/v1/search?query=${query}&per_page=80&page=1`,
          {
            headers: {
              Authorization:
                "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
            }
          }
        )
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data.photos);
          })
        
               
           
        
    }

    
   
    render (){        

      
        
        return(
          <section className={style.pictureItem}>
            <img className = {style.pictureItemSrc}
              src='data:image/jpeg;base64,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'
              alt=""
            />
          <article className={style.userInfoWrapper}>
            <div>
              <a href="/" className={style.userInfo}>
                <img
                  className={style.img}
                  src="https://images.pexels.com/users/avatars/39047/scott-webb-462.jpeg?w=60&h=60&fit=crop&crop=faces"
                  alt=""
                />
                <span className={style.userName}>Name</span>
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
        </section>
    )
}
}

export default Images;