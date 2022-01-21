import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { OnlineservicesComponent } from '../onlineservices/onlineservices.component';
import { PhysiotherapyComponent } from '../physiotherapy/physiotherapy.component';
import { AppointmentComponent } from '../appointment/appointment.component';
import { PulmonologistComponent } from '../pulmonologist/pulmonologist.component';
import { PaediatricComponent } from '../paediatric/paediatric.component';
import { OrthopaedicComponent } from '../orthopaedic/orthopaedic.component';
import { OphthalmologyComponent } from '../ophthalmology/ophthalmology.component';
import { EntComponent } from '../ent/ent.component';
import { DermatologyComponent } from '../dermatology/dermatology.component';
import { DentistComponent } from '../dentist/dentist.component';
import { CovidComponent } from '../covid/covid.component';
import { ExampleComponent } from '../example/example.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'contact',     component: ContactComponent },
  { path: 'about',     component: AboutComponent },
  {path:'onlineservices',component:OnlineservicesComponent },
  { path: 'home/physiotherapy',  component:  PhysiotherapyComponent },
  { path: 'home/physiotherapy/appointment',  component: ExampleComponent },
  { path: 'home/PulmonologistComponent',  component:  PulmonologistComponent },
  { path: 'home/PulmonologistComponent/appointment',  component: ExampleComponent },
  { path: 'home/PaediatricComponent',  component:  PaediatricComponent },
  { path: 'home/PaediatricComponent/appointment',  component: ExampleComponent },
  { path: 'home/OrthopaedicComponent',  component:  OrthopaedicComponent },
  { path: 'home/OrthopaedicComponent/appointment',  component: ExampleComponent },
  { path: 'home/OphthalmologyComponent',  component:  OphthalmologyComponent },
  { path: 'home/OphthalmologyComponent/appointment',  component: ExampleComponent },
  { path: 'home/EntComponent',  component:  EntComponent },
  { path: 'home/EntComponent/appointment',  component: ExampleComponent },
  { path: 'home/DermatologyComponent',  component:  DermatologyComponent },
  { path: 'home/DermatologyComponent/appointment',  component: ExampleComponent },
  { path: 'home/DentistComponent',  component:  DentistComponent },
  { path: 'home/DentistComponent/appointment',  component: ExampleComponent },
  { path: 'home/CovidComponent',  component:  CovidComponent },
  { path: 'home/CovidComponent/appointment',  component: ExampleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home/physiotherapy/example',  component: ExampleComponent},
];