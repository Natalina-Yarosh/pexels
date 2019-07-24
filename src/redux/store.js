import { createStore, combineReducers, applyMiddleware } from "redux";
import valuePicturesReducer from './valuePicturesReducer';
import getPicturesReducer from './getPicturesReducer';
import pictureMiddleware from './middleware';

let reducers = combineReducers({
    valuePictures: valuePicturesReducer,
    getPictures: getPicturesReducer
})

const store = createStore(reducers, applyMiddleware(pictureMiddleware));

export default store;
