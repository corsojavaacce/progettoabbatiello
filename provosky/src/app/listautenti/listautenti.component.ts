import { Component, OnInit, Input } from '@angular/core';
import { ServizioService } from '../servizio.service';
import { utente } from 'src/model/utente';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-listautenti',
  templateUrl: './listautenti.component.html',
  styleUrls: ['./listautenti.component.css']
})
export class LISTAUTENTIComponent implements OnInit {
  loaded: boolean;
 @Input() persona: utente[];
  idpreso: any;
  loaded2: boolean;
  iddettaglio:number;
  constructor(private servizio: ServizioService,private route:Router) {
  }


  ngOnInit() {

    this.servizio.get().subscribe((next) => {
      console.log(next)
      this.persona = next;
    })
  }


  delete(idpreso, i) {
    this.servizio.delete(idpreso).subscribe((next) => {

      console.log(next);
      this.persona.splice(i, 1),
        (error) => {
          console.log(error)
        }
    })

  }
  estraiid(idriga) {
    this.idpreso = idriga;
    this.loaded = true;
    console.log(this.idpreso)
  }
  aggiornautente(form) {
    console.log(form)
    let cristiano: utente = { id: form.form.controls.id.value, nome: form.form.controls.nome.value, cognome: form.form.controls.cognome.value, eta: form.form.controls.eta.value, sesso: form.form.controls.sesso.value, indirizzo: form.form.controls.indirizzo.value, email: form.form.controls.indirizzo.value, telefono: form.form.controls.telefono.value };
    this.servizio.update(this.idpreso, cristiano).subscribe((next) => {
      console.log(next);
      (error) => {
        console.log(error);
      }

    })
  }
  mostradettagli(iddettaglio) {
   this.route.navigate(["/dettagliutente",iddettaglio])
  }

}

