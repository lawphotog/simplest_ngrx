import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Photo } from '../models/models';
import { Observable } from 'rxjs/Observable';
import * as fromPhotos from '../actions/photos.action';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos$: Observable<Photo[]>;

  constructor(private store: Store<AppState>) {
    this.photos$ = store.select<Photo[]>(s => s.photosReducer.photos);
   }

  ngOnInit() {
    this.store.dispatch(new fromPhotos.LoadPhotosAction());
  }

}
