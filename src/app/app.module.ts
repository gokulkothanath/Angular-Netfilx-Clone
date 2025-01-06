import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BrowseComponent } from './pages/browse/browse/browse.component';
import { BannerComponent } from './core/components/banner/banner.component';
import { provideHttpClient } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/components/movie-carousel/movie-carousel/movie-carousel.component';
import { DescriptionPipe } from './shared/pipes/description.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    BrowseComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,CommonModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
