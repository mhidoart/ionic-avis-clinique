import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailingServiceService {
  apiURL = 'https://mailer--14143.cfapps.io/';  //deployed app

  httpOptions = {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 };
 constructor(private http: HttpClient) { }
 send(nom: string,email: string,msg: string): Promise<any> {
   let jj =  {"results":[
     {"cle":'' },
     {"appName": '' },
     {"text": msg },
     {"subject": '' }
   ]};
   return this.http.post(this.apiURL + '/mailer/abid/'+ nom + '/'+ email, JSON.stringify(jj), this.httpOptions).toPromise().then(
     res => {
       alert('message envoyé avec succès !!');
       return true;
     },
    errno => {
      console.log(errno);
      if(errno.statusText === 'OK') {alert('message envoyé avec succès !!');        return true;
     }else{

       alert('Problème d\'envoi de mail verrifier votre connexion !!');
       return false;

      }
      
       
     } 
   );
}
}
