import { Component, inject, OnInit,OnChanges } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { Ivideo } from 'src/app/shared/models/video-content.interface';
import { DescriptionPipe } from 'src/app/shared/pipes/description.pipe';
import { DataService } from 'src/app/shared/services/data.service';
import { MovieService } from 'src/app/shared/services/movie.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css'],
})
export class BrowseComponent implements OnInit,OnChanges {
  constructor(private dataService:DataService){}
movieService=inject(MovieService)
popularMovies:Ivideo[]=[]
tvShows:Ivideo[]=[]
bannerDetail:any=new Observable<any>();
vidKey:string='';
id:string=''
ngOnInit(): void {
  this.movieService.getMovies().subscribe(res=>{
    this.popularMovies=res.results;
    this.tvShows=res.results
    this.movieService.getBannerDetail(this.popularMovies[0].id).subscribe(res=>{
      this.bannerDetail=res
    })
    this.movieService.getBannerVideo(this.popularMovies[0].id).subscribe((res:any)=>{
      this.vidKey=res.results[0].key
    })
  })
  this.dataService.data$.subscribe(data=>{
    this.movieService.getBannerDetail(data).subscribe(res=>{
      this.bannerDetail=res
    })
   })
}
ngOnChanges():void{}
}
