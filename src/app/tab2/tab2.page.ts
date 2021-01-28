import { Component, Input } from '@angular/core';
import { MailingServiceService } from '../api/mailing-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  reportSent = false;
  //presence reanimation
  color = 'green';
  checked = false;
  disabled = false;
  togle1Text = 'Non';

  //temps d'attente
  checked1 = false;
  disabled1 = false;
  togle1Text1 = 'Non';
  // Eco graphie
  checked2 = false;
  disabled2 = false;
  togle1Text2 = 'Non';
  // radio-graphie:
  checked3 = false;
  disabled3 = false;
  togle1Text3 = 'Non';
  // IRM
  checked4 = false;
  disabled4 = false;
  togle1Text4 = 'Non';


  presence = 'Oui';

  // Qualité de soin
  qs = 'bonne'
   // Qualité de matériaux
   qm ='bonne'
  comportement = 'bon'
  gettoggleText() {
    if (this.disabled) { return 'je sais pas ' }
    if (this.checked === false) {
      this.togle1Text = 'Non'

    } else {
      this.togle1Text = 'Oui'

    }
    return this.togle1Text;
  }
  gettoggleText1() {
    if (this.disabled1) { return 'je sais pas ' }
    if (this.checked1 === false) {
      this.togle1Text1 = 'Non'

    } else {
      this.togle1Text1 = 'Oui'

    }
    return this.togle1Text1;
  }
  gettoggleText2() {
    if (this.disabled2) { return 'je sais pas ' }
    if (this.checked2 === false) {
      this.togle1Text2 = 'Non'

    } else {
      this.togle1Text2 = 'Oui'

    }
    return this.togle1Text2;
  }
  gettoggleText3() {
    if (this.disabled3) { return 'je sais pas ' }
    if (this.checked3 === false) {
      this.togle1Text3 = 'Non'

    } else {
      this.togle1Text3 = 'Oui'

    }
    return this.togle1Text3;
  }
  gettoggleText4() {
    if (this.disabled4) { return 'je sais pas ' }
    if (this.checked4 === false) {
      this.togle1Text4 = 'Non'

    } else {
      this.togle1Text4 = 'Oui'

    }
    return this.togle1Text4;
  }
  constructor(public mailer: MailingServiceService) {}
  send(){
    this.reportSent=true;
    var msg:string ='<p><h1>avis sur les services :</h1></p> <p>presence reanimation :[ '+this.gettoggleText()+' ]</p>'
    +'<p>temps d\'attente : [ '+this.gettoggleText1()+' ]</p>'
    +'<p> Eco graphie: [' +this.gettoggleText2()+' ]</p>'
    +'<p>radio-graphie :[ '+this.gettoggleText3()+' ]</p>'
    +'<p>IRM :[ '+this.gettoggleText4()+' ]</p>'
    +'<p>Présence : [ '+this.presence+' ]</p>'
    +'<p> Qualité de soin : [ '+this.qs+' ]</p>'
    +'<p> Qualité de matériaux : [ '+this.qm+' ]</p>'
    +'<p>comportement  : [ '+this.comportement+' ]</p>';
    this.mailer.send((new Date()).toJSON(), 'Clinique Razi AVis-App', msg.toString()).then(
      res => {
        let tr = res as boolean;
        if(tr) {
          //reset
        }
      }
    );
  }
  isSent() {
    return this.reportSent;
  }

  sendServiceReport() {
    this.send();
    alert('avis envoyer');
  }

}
