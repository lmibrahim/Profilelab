import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  myProfile!: UserProfile;

  constructor(private myProfileService: ProfileService) {}

  ngOnInit(): void {
    this.myProfile = this.myProfileService.getUserProfile();
    console.log(this.myProfile);
  }
}
