import { ProfileService } from './../../services/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workexp:any;

  constructor( private profileService:ProfileService) { }

  ngOnInit(){

    this.workexp =this.profileService.exprience();
  }

}
