import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: '', component: PhotosComponent },
  { path: 'photos', component: PhotosComponent},
  { path: '**', redirectTo: 'photos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
