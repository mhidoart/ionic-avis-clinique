import { Component } from '@angular/core';
import { HtmlParser } from '@angular/compiler';
import { MailingServiceService } from '../api/mailing-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  reception ='bonne';
  proprete ='acceptable';
  PresentationPersonnel='acceptable';
  prixConsultation='abordable';
  tempAttente = 'moyen';
  report='<p>reception : '+this.reception+'</p> <p>propreté :&nbsp; '+this.proprete+'</p>'
 +'<p>présentation du personnel:&nbsp; '+this.PresentationPersonnel+'</p>'
  +'<p>prix de Consultation : '+this.prixConsultation+'</p>'
  +'<p>temp d\'attente:&nbsp; '+this.tempAttente+'</p>';

  reportSent = false;
  
  constructor(public mailer: MailingServiceService) {}
  send(){
    this.reportSent=true;
    var msg:string ='<p><h1>avis generale :</h1></p> <p>reception :[ '+this.reception+' ]</p>'
    +'<p>propret&eacute; : [ '+this.proprete+' ]</p>'
    +'<p>pr&eacute;sentation du personnel: [' +this.PresentationPersonnel+' ]</p>'
    +'<p>prix de Consultation :[ '+this.prixConsultation+' ]</p>'
    +'<p>temp d\'attente: &nbsp; [ '+this.tempAttente+' ]</p>';
    this.mailer.send((new Date()).toJSON(), 'Clinique Razi AVis-App', msg.toString()).then(
      res => {
        let tr = res as boolean;
        if(tr) {
          //reset
        }
      }
    );
  }
  isSent(){
    return this.reportSent;
  }
  sendGlobaleReport(){
    /* this.report='reception :'+ this.reception +
          "propreté : "+ this.proprete+
          "présentation du personnel: "+ this.PresentationPersonnel +
          "prix de Consultation :" + this.prixConsultation
          + "temp d'attente" + this.tempAttente; */

          this.send();
   
  }

}
