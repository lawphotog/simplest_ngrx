import { Injectable } from '@angular/core';
import { Effect, Actions } from "@ngrx/effects";
import { PhotoService } from '../services/photos.service';
import * as fromPhotos from '../actions/photos.action';
import { map, switchMap, catchError } from 'rxjs/operators';

@Injectable()
export class PhotosEffects {

    @Effect() 
    loadPhotos$ = this.actions$
        .ofType(fromPhotos.PhotosActionTypes.LOAD_PHOTOS)
        .pipe(switchMap(() => {
            return this.photoService
            .getPhotos()
            .pipe(
                map(photos => new fromPhotos.LoadPhotosSuccessAction(photos))
            )
        })
    );

    constructor(private photoService: PhotoService, private actions$: Actions) {}
}
