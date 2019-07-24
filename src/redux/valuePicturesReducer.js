const UPDATE_NEW_VALUE_TEXT = 'UPDATE-NEW-VALUE-TEXT';

let initialState = {  
    value: 'Search ' 
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

