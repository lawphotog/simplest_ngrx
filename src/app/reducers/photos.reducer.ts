import * as fromPhotos from '../actions/photos.action';

export function reducer(state = [], action: fromPhotos.Action) {

    switch(action.type) {
        case fromPhotos.PhotosActionTypes.LOAD_PHOTOS_SUCCESS: {
            console.log('payload: ' + JSON.stringify(action.payload))
            return action.payload;
        }
        default: {
            return state;
        }
    }

}