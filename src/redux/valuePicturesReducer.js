const UPDATE_NEW_VALUE_TEXT = 'UPDATE-NEW-VALUE-TEXT';

let initialState = {  
    value: 'Search ' ,
    staticListOffesPictures: ['house', 'hair', 'books', 'food', 'street', 'time', 'more', 
        'background', 'mom', 'business', 'baby', 'happy', 'news', 'abstract', 'money', 'people',
        'crowd', 'office', 'women', 'meeting', 'men', 'girl', 'fashion', 'man', 'person',    
        'couple','eating', 'restaurant', 'dinner', 'drink', 'alcohol', 'beer', 'number', 'data',
        'business', 'love', 'romantic', 'heart', 'summer', 'nature']
}


const valuePicturesReducer = (state = initialState, action) => {
    switch (action.type){       
        case UPDATE_NEW_VALUE_TEXT:{            
            return {
                ...state,              
                value: action.value
            };            
        }
        default:
            return state;
    }
}  
export const  updateNewValueActionCreator = (value) => {    
    return {
      type: UPDATE_NEW_VALUE_TEXT, 
      value: value  
    } 
}

export default valuePicturesReducer;

