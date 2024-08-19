import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonationComponent } from './donation/donation.component';
import { MediaComponent } from './media/media.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'donate', component: DonationComponent},
  {path: 'media', component: MediaComponent},
  {path: '**', redirectTo: ''}
];
