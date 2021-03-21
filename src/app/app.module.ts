import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroJistComponent } from './components/home/sub-components/hero-jist/hero-jist.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ClassesJistComponent } from './components/home/sub-components/classes-jist/classes-jist.component';
import { AboutJistComponent } from './components/home/sub-components/about-jist/about-jist.component';
import { GalleryJistComponent } from './components/home/sub-components/gallery-jist/gallery-jist.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ContactJistComponent } from './components/home/sub-components/contact-jist/contact-jist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroJistComponent,
    HeaderComponent,
    ClassesJistComponent,
    AboutJistComponent,
    GalleryJistComponent,
    FooterComponent,
    ContactJistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
