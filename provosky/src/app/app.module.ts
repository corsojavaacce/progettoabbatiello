import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LISTAUTENTIComponent } from './listautenti/listautenti.component';
import { HttpClientModule } from '@angular/common/http';
import { NuovocontattoComponent } from './nuovocontatto/nuovocontatto.component';
import { DettagliutenteComponent } from './dettagliutente/dettagliutente.component';
import { AppuntamentiComponent } from './appuntamenti/appuntamenti.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatdialogComponent } from './matdialog/matdialog.component';
import { HttpModule } from '@angular/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material';
import { MatInputModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from "@angular/forms";
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PageNotFoundComponent,
    LISTAUTENTIComponent,
    NuovocontattoComponent,
    DettagliutenteComponent,
    AppuntamentiComponent,
    MatdialogComponent,
    AnimationComponent,
  ],entryComponents:[
MatdialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule,
    HttpModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'home', redirectTo: '' },  
      { path:'dettagliutente/:iddettaglio', component:DettagliutenteComponent},
      { path: 'animazioni', component: AnimationComponent},
      { path: 'appuntamenti', component: AppuntamentiComponent},
      { path: 'listautenti', component: LISTAUTENTIComponent },
      { path: 'nuovocontatto', component: NuovocontattoComponent },
     
      { path: '**', component: PageNotFoundComponent }
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
