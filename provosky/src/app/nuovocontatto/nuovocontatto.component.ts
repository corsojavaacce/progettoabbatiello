import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../servizio.service';
import { utente } from 'src/model/utente';

@Component({
  selector: 'app-nuovocontatto',
  templateUrl: './nuovocontatto.component.html',
  styleUrls: ['./nuovocontatto.component.css']
})
export class NuovocontattoComponent implements OnInit {

  constructor(private servizio: ServizioService) { }

  ngOnInit() {
  }
  aggiungipersone(form){
    console.log(form.value.nome)
    console.log(form.value.id);
    let persona: utente = {id:form.value.id, nome: form.value.nome, cognome: form.value.cognome, eta : form.value.eta, sesso: form.value.sesso, indirizzo: form.value.indirizzo, email: form.value.email, telefono: form.value.telefono};
    console.log(persona.cognome);
    this.servizio.post(persona).subscribe((next)=>{
console.log(next)
console.log(next)
console.log(next)
    })
   }
}
