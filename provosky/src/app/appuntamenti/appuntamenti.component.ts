import { Component,ViewChild, OnInit, Inject } from '@angular/core';
import {ServizioService} from 'C:/Users/Corso/Downloads/corso-Angular-Lezioni-master/corso-Angular-Lezioni-master/provosky/src/app/servizio.service'
import {appuntamento } from 'C:/Users/Corso/Downloads/corso-Angular-Lezioni-master/corso-Angular-Lezioni-master/provosky/src/model/appuntamento'
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { MatdialogComponent } from '../matdialog/matdialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.css']
})
export class AppuntamentiComponent implements OnInit {

//Dichiarazioni
evento:string;
popup:boolean=false;
ciao:any;
start:any;
date:any


  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
 
  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'Event Now', start: new Date() }
  ];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg,ciao:any) {
    
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: ciao.start +" "+ ciao.date,
        start: arg.date,
        allDay: arg.allDay
      })
    
  }

  addappuntamento(){
this.popup=!this.popup;
  }
  openDialog(event): void {
    debugger
    const dialogRef = this.dialog.open(MatdialogComponent, {
      width: '350px',
      data: {start: this.start, date: this.date}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
     this.ciao=result;
     this.handleDateClick(event,this.ciao);
      
      
    });
  }
}
