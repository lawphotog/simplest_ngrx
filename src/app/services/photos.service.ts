import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Photo } from '../models/models';
import 'rxjs/add/observable/of';

@Injectable()
export class PhotoService {

    constructor() { }

    getPhotos(): Observable<Photo[]> {
        let photo = [{
            src: 'https://www.planwallpaper.com/static/images/nature_backgrounds_perfect_version_images_7035.jpg'
        }];

        return Observable.of(photo);
    }
}
