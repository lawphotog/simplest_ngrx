import { Action } from '@ngrx/store';
import { Photo } from '../models/models';

export enum PhotosActionTypes {
    LOAD_PHOTOS = 'LOAD_PHOTOS',
    LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS'
}

export class LoadPhotosAction implements Action {
    readonly type = PhotosActionTypes.LOAD_PHOTOS;

    constructor() { }
}

export class LoadPhotosSuccessAction implements Action {
    readonly type = PhotosActionTypes.LOAD_PHOTOS_SUCCESS;

    constructor(public payload: Photo[]) {}
}

export type Action = LoadPhotosAction | LoadPhotosSuccessAction;
