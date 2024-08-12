import { ProfileService } from 'src/app/services/profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

  extras:any;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.extras=this.profileService.extraCircular();
  }

}
