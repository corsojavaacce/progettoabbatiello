import { Component, OnInit } from '@angular/core';
import { LISTAUTENTIComponent } from 'src/app/listautenti/listautenti.component';
import { ServizioService } from '../servizio.service';
import { utente } from 'src/model/utente';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dettagliutente',
  templateUrl: './dettagliutente.component.html',
  styleUrls: ['./dettagliutente.component.css']
})
export class DettagliutenteComponent implements OnInit {
sub:Subscription;
iddi:any;
mad:boolean=false;
i:number=0;
singolo:utente;
speppa:any;

  constructor(private servizio: ServizioService, private route:Router,formbuilder:FormBuilder,private active:ActivatedRoute) {
    this.sub=this.active.paramMap.subscribe(
      param=>{this.iddi=param.get("iddettaglio")})
    
   }

  ngOnInit() {
    this.servizio.getById(this.iddi).subscribe((next) => {
      console.log(next)
      this.singolo=next;
    /*  while(this.mad==false || this.i<3){
  this.speppa=next[this.i].id
  console.log(this.speppa)
if(next[this.i].id==this.iddi){ 
console.log(next[this.i].cognome)
this.singolo=next[this.i]
console.log(this.singolo)
this.mad=true;
}
this.i++;
    }*/
      
      
      
  })
}


}