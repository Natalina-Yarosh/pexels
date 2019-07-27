import { GET_PICTURES, getPicturesFail, getPicturesSuccess } from "./getPicturesReducer";

const pictureMiddleware = state => next => async action => {    
  
  if (action.type === GET_PICTURES) {
        try {
            const stream = await fetch(        
                `https://api.pexels.com/v1/search?query=${action.payload}&per_page=80&page=1`,
                {
                headers: {
                    Authorization:
                    "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf"
                    }
                }
            )    
            const response = await stream.json();      
            
            const items =  response.photos;    
            
            state.dispatch(getPicturesSuccess(items));
        } catch (error) {
            state.dispatch(getPicturesFail(error));
          }
    } else {
        
        next(action);
        }
};

export default pictureMiddleware