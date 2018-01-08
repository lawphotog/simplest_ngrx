import { Injectable } from '@angular/core';
import { Effect, Actions } from "@ngrx/effects";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { PhotoService } from '../services/photos.service';
import * as fromPhotos from '../actions/photos.action';

@Injectable()
export class PhotosEffects {
    @Effect() loadPhotos$ = this.actions$
        .ofType(fromPhotos.PhotosActionTypes.LOAD_PHOTOS)
        .switchMap(() => this.photoService.getPhotos()
        .map(photos => (new fromPhotos.LoadPhotosSuccessAction(photos)))
    )

    constructor(private photoService: PhotoService, private actions$: Actions) {}

}