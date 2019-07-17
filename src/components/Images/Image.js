import React from 'react';
//import style from './Images.module.css';
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
            <div>           

            
        </div>
    )
}
}

export default Images;