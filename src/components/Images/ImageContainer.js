import Image from './Image';
import {connect} from 'react-redux';
import {followAC, unfollowAC, setImagesAC} from '../../redux/images-reducer';

let mapStateToProps  = (state) => {
    return {
        images: state.imagesPages.images,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (imageID) => {
            dispatch(followAC(imageID))
        },
        unfollow: (imageID) => {
            dispatch(unfollowAC(imageID))
        },
        setImages: (images) => {
            dispatch(setImagesAC(images))
        },
        
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Image);