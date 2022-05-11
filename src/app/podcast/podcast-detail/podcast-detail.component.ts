import { Component, Input, OnInit } from '@angular/core';
import { PodcastDetail} from '../podcast-detail';

@Component({
 selector: 'app-podcast-detail',
 templateUrl: './podcast-detail.component.html',
 styleUrls: ['./podcast-detail.component.css']
})
export class PodcastDetailComponent implements OnInit {

 @Input() podcastDetail!: PodcastDetail;

 constructor() { }

 ngOnInit() {
 }

}
