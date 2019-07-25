export const GET_PICTURES = "GET_PICTURES";
export const GET_PICTURES_SUCCESS = "GET_PICTURES_SUCCESS";
export const GET_PICTURES_FAIL = "GET_PICTURES_FAIL";

const initialState = {
    data: [],
    error: null,
    
  };
  
const getPicturesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PICTURES_SUCCESS: {
        return {
          ...state,
          data: [...state.data, ...action.payload]
        };
      }
      case GET_PICTURES_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
      default:
        return state;
    }
}

export const getPictures = (query) => {
  return {
    type: GET_PICTURES,
    payload: query
  };
}

export const getPicturesSuccess = (data) => {
  return {
    type: GET_PICTURES_SUCCESS,
    payload: data
  };
}

export const getPicturesFail = (error) =>  {
  return {
    type: GET_PICTURES_FAIL,
    payload: error
  };
}

export default getPicturesReducer