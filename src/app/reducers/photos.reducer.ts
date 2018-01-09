import * as fromPhotos from '../actions/photos.action';
import { AppState } from '../models/models';

export function photosReducer(state: AppState, action: fromPhotos.Action) {

    switch (action.type) {
        case fromPhotos.PhotosActionTypes.LOAD_PHOTOS_SUCCESS: {
            return {
                ...state,
                photos: action.payload
            };
        }
        default: {
            return state;
        }
    }

}
