import React from 'react';
import style from './HeaderBottom.module.css';
import Input from '../../Input/Input';

class HeaderBottom extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      staticListOffesPictures: ['house', 'hair', 'books', 'food', 'street', 'time', 'more', 
        'background', 'mom', 'business', 'baby', 'happy', 'news', 'abstract', 'money', 'people',
        'crowd', 'office', 'women', 'meeting', 'men', 'girl', 'fashion', 'man', 'person',    
        'couple','eating', 'restaurant', 'dinner', 'drink', 'alcohol', 'beer', 'number', 'data',
        'business', 'love', 'romantic', 'heart', 'summer', 'nature']
      
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
        const {  items, staticListOffesPictures } = this.state;
        let i =  Math.round( Math.random() * (items.length));
        console.log(items);
        
        let bannerInfoPhoto =  items.find((item, index)  =>  index === i ? item : '')
        
        
        function compareRandom(a, b) {
            return Math.random() - 0.5;
        }
            
        staticListOffesPictures.sort(compareRandom);
            
        console.log(staticListOffesPictures)
        let res = staticListOffesPictures.slice(0,7);
        console.log(res)
        // for(let k=0; k < 7; k++){
        // let a =  Math.round( Math.random() * (staticListOffesPictures.length));
        // console.log(staticListOffesPictures[a])          
        // } 
          
        const listItems = res.map((number) =>   <li><a href>{number}</a></li> );
       
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
                            {listItems}                            
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