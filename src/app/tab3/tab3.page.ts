import { Component } from '@angular/core';
import { MailingServiceService } from '../api/mailing-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private nom: string;
  private email: string = '';
  private msg: string;
  private hidden: boolean = false;
  constructor(public mailer: MailingServiceService) {}
  send(){
    this.hidden = true;
    this.mailer.send(this.nom, this.email, this.msg).then(
      res => {
        this.hidden=false;
        let tr = res as boolean;
        if(tr) {
          this.email ='';
          this.nom = '';
          this.msg = '';
        }
      }
    );
  }
  getHiddenState(){
    return !this.hidden;
  }
}
