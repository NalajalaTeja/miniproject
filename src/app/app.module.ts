import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatIconModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RegisterComponent } from './register/register.component'; 
import {MatTabsModule} from '@angular/material/tabs';
import { OnlineservicesComponent } from './onlineservices/onlineservices.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { SildingimgesComponent } from './sildingimges/sildingimges.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PulmonologistComponent } from './pulmonologist/pulmonologist.component';
import { PaediatricComponent } from './paediatric/paediatric.component';
import { OrthopaedicComponent } from './orthopaedic/orthopaedic.component';
import { OphthalmologyComponent } from './ophthalmology/ophthalmology.component';
import { EntComponent } from './ent/ent.component';
import { DermatologyComponent } from './dermatology/dermatology.component';
import { DentistComponent } from './dentist/dentist.component';
import { CovidComponent } from './covid/covid.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './example/example.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    MainNavComponent,
    RegisterComponent,
    OnlineservicesComponent,
    PhysiotherapyComponent,
    SildingimgesComponent,
    AppointmentComponent,
    PulmonologistComponent,
    PaediatricComponent,
    OrthopaedicComponent,
    OphthalmologyComponent,
    EntComponent,
    DermatologyComponent,
    DentistComponent,
    CovidComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatCarouselModule.forRoot(),
    MatGridListModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatIconModule,
    MatSidenavModule,MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    LayoutModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule ,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  exports:[MatSidenavModule],
  providers: [],
  entryComponents: [
    LoginComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
