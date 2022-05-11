import { Component, OnInit } from '@angular/core';
import { Podcast } from '../podcast';
import { PodcastDetail } from '../podcast-detail';
import { PodcastService } from '../podcast.service';

@Component({
  selector: 'app-listaPodcast',
  templateUrl: './listaPodcast.component.html',
  styleUrls: ['./listaPodcast.component.css']
})
export class ListaPodcastComponent implements OnInit {

  podcasts: Array<PodcastDetail> = [];
  selected: Boolean = false;
  selectedPodcast!: PodcastDetail;
  constructor(private podcastService: PodcastService) { }

  getPodcasts(): void{
    this.podcastService.getPodcasts().subscribe((podcasts) => {
      this.podcasts = podcasts;
    });

  }

  ngOnInit() {
    this.getPodcasts();
  }

  onSelected(podcast: PodcastDetail): void {
    this.selected = true;
    this.selectedPodcast = podcast;
  }

}
