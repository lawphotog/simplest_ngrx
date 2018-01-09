import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotoService } from './services/photos.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PhotosEffects } from './effects/photos.effect';
import { photosReducer } from './reducers/photos.reducer';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({photosReducer}),
    EffectsModule.forRoot([PhotosEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [PhotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
