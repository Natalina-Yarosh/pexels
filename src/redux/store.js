import { createStore, combineReducers } from "redux";
import valuePicturesReducer from './valuePicturesReducer';

let reducers = combineReducers({
    valuePictures: valuePicturesReducer
})

const store = createStore(reducers);

export default store;
