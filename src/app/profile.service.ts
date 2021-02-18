import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Lamees',
    contact: 'Lamees@gmail.com',
    bio: "Don't address me",
  };

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  // updates info on profile
  setUserProfile = (updatedProfileObject: UserProfile): void => {
    this.userProfile = updatedProfileObject;
  };
}
