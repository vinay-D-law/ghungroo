import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery-jist',
  templateUrl: './gallery-jist.component.html',
  styleUrls: ['./gallery-jist.component.scss']
})
export class GalleryJistComponent implements OnInit {
  videos: any[] = [];
  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.getAllVideos();
  }

  getAllVideos() {
    this.videos.push({url : 'https://www.youtube.com/embed/6-uxdvxMmJs'});
    this.videos.push({url : 'https://www.youtube.com/embed/hJXFNuyEREU'});
    this.videos.push({url: 'https://www.youtube.com/embed/UR8PYV1QYlU'});
    console.log(this.videos);
  }

  sanitizeUrl(url: string) {
    const safeurl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return safeurl;
  }

}
