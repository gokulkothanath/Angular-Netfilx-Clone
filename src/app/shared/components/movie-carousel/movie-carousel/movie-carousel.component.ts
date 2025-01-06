import { Component, ElementRef, OnInit,ViewChild,AfterViewInit, Input} from '@angular/core';
import { Ivideo } from 'src/app/shared/models/video-content.interface';
import { DataService } from 'src/app/shared/services/data.service';
import Swiper from 'swiper';


@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.css'],
})
export class MovieCarouselComponent implements OnInit,AfterViewInit {
  @Input() videoContents:Ivideo[]=[]
  @Input() title:string=''
  selectedContent: string | null = null;
@ViewChild('swiperContainer') swipercontainer!:ElementRef

constructor(private dataService:DataService){

}
ngAfterViewInit():void{
 this.initSwiper()
}
ngOnInit(): void {
  
}
private initSwiper(){
  return new Swiper(this.swipercontainer.nativeElement,{
    slidesPerView:3,
    slidesPerGroup:2,
    centeredSlides:true,
    loop:true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1800: {
        slidesPerView: 5,
        slidesPerGroup: 6,
        spaceBetween: 5,
        centeredSlides: false,
      }
    }
  })
}
setHoverMovie(movie: Ivideo) {
  this.selectedContent = movie.title ??movie.original_title;
}

clearHoverMovie() {
  this.selectedContent = null;
}
filmClick(id:any){
  this.dataService.sendData(id)
}
}
 