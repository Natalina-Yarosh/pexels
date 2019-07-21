import React from 'react';
import style from './HeaderBottom.module.css';
import Input from '../../Input/Input';

class HeaderBottom extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
      
    };
  }

    componentDidMount(){

        const query = 'background';

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
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.photos                   
                });              
                               
            })   
        }   

    render(){
        const {  items } = this.state;
        let i =  Math.round( Math.random() * (items.length));
        console.log(items);
        
        let bannerInfoPhoto =  items.find((item, index)  =>  index === i ? item : '')
  
            
       
       
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
                    <Input />
                    <div >
                        <ul className = {style.listSearch}><span>Suggested:</span>
                            <li><a href = '/'>cat1</a></li>
                            <li><a href = '/'>cat2</a></li>
                            <li><a href = '/'>cat3</a></li>
                            <li><a href = '/'>cat4</a></li>
                            <li><a href = '/'>cat5</a></li>
                            <li><a href = '/'>cat6</a></li>
                            <li><a href = '/'>cat7</a></li>                            
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className = {style.subscribeHeaderButtom}>
                    <a href = {bannerInfoPhoto && bannerInfoPhoto.photographer_url}>Photo by {bannerInfoPhoto && bannerInfoPhoto.photographer}</a>
            </div>
        </section>

    )
    }
}

export default HeaderBottom;