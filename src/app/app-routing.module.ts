import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutJistComponent } from './components/home/sub-components/about-jist/about-jist.component';
import { ClassesJistComponent } from './components/home/sub-components/classes-jist/classes-jist.component';
import { ContactJistComponent } from './components/home/sub-components/contact-jist/contact-jist.component';
import { GalleryJistComponent } from './components/home/sub-components/gallery-jist/gallery-jist.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'enroll',
    component: ContactJistComponent
  },
  {
    path: 'gallery',
    component: GalleryJistComponent
  },
  {
    path: 'about',
    component: AboutJistComponent
  },
  {
    path: 'classes',
    component: ClassesJistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
