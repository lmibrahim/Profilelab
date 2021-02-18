import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) {}

  myUserProfile!: UserProfile;
  @Output() submitEvent = new EventEmitter<UserProfile>();

  ngOnInit(): void {
    this.myUserProfile = this.profileService.getUserProfile();
  }

  newProfileInfo = (form: NgForm): void => {
    console.log(form);
    let newEdit: UserProfile = {
      name: form.form.value.name,
      contact: form.form.value.contact,
      bio: form.form.value.bio,
    };
    this.profileService.setUserProfile(newEdit);
    this.submitEvent.emit(newEdit);
    this.router.navigate(['/profile']);
  };
}
