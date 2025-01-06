import { Component, Inject, inject, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from 'src/app/shared/services/data.service';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
@Input() banTitle:string=''
@Input() banDes:string=''
@Input()key:string="ru5Cku2t1JU";
private sanitizer=inject(DomSanitizer)
videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`)
constructor(private dataService:DataService){};
movieService=inject(MovieService)
ngOnInit(): void {
  this.dataService.data$.subscribe(res=>{
     this.movieService.getBannerVideo(res).subscribe((res:any)=>{
      this.key=res.results[0].key
      this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`)
     })
  })
}
}
