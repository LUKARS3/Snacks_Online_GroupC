import { LightningElement, api, track } from 'lwc';
import insertContactMethod from '@salesforce/apex/lwcApexController.insertContactMethod';
import Name from '@salesforce/schema/signupOrder__c.Name';
import fname from '@salesforce/schema/signupOrder__c.First_Name__c';
import lname from '@salesforce/schema/signupOrder__c.Last_Name__c';
import comp from '@salesforce/schema/signupOrder__c.Company__c';
import add from '@salesforce/schema/signupOrder__c.Address__c';
import app from '@salesforce/schema/signupOrder__c.Appartment__c';
import city from '@salesforce/schema/signupOrder__c.City__c';
import states1 from '@salesforce/schema/signupOrder__c.State__c';
import country from '@salesforce/schema/signupOrder__c.Country__c'

import {ShowToastEvent} from 'lightning/platformShowToastEvent';



export default class Signupformlwc extends LightningElement {

  Emailval;
  firstnameval;
  lastname1;
  compval;
  addressval;
  cityval;
  stateval;
  countryval;
  @api productName;
  @api totalprice;
  @api totalquantity;

  @track ids;
  @track error;    
  @track getRegRecord={
    Name:Name, 
    firstname:fname,
    lastname:lname, 
    comp:comp, 
    add:add,         
    city:city,
    country1:country          
  };   

  nameInpChange(event){
      this.getRegRecord.Name = event.target.value;
    
      console.log(this.getRegRecord.Name);
    }

    lastNameInpChange(event){
      this.getRegRecord.lastname = event.target.value;
      this.lastname1 = event.target.value;
      console.log(this.getRegRecord.lastname);
    }
    firstNameInpChange(event){
      this.getRegRecord.firstname = event.target.value;
      this.firstnameval = event.target.value;
      console.log(this.getRegRecord.firstname);
    }


    compNameInpChange(event){
      this.getRegRecord.comp = event.target.value;
      this.compval = event.target.value;
      console.log(this.getRegRecord.comp);
    }

    addNameInpChange(event){
      this.getRegRecord.add = event.target.value;
      this.addressval = event.target.value;
      console.log(this.getRegRecord.add);
    }
    

    cityNameInpChange(event){
      this.getRegRecord.city = event.target.value;
      this.cityval = event.target.value;
      console.log(this.getRegRecord.city);
    }

    countryNameInpChange(event){
      this.getRegRecord.country1 = event.target.value;
      this.countryval = event.target.value;
      console.log(this.getRegRecord.country);
  }

  saveAccountAction(){  
  console.log('before save');

  //Insert into signupOrder object
  insertContactMethod({signobj: this.getRegRecord})
    .then(result=>{
        console.log(this.createAccount);
       
        this.ids=result.Id;
        console.log('after save' + this.ids);
        
        this.Emailval = result.Name
        console.log(this.Emailval)
        console.log(this.lastname1)
        console.log(this.firstnameval)
        console.log(this.compval)
        console.log(this.addressval)
        console.log(result)
        const toastEvent = new ShowToastEvent({
          title:'Success!',
          message:'Account created successfully',
          variant:'success'
        });
        this.dispatchEvent(toastEvent);
    })
    .catch(error=>{
       
      const evt = new ShowToastEvent({
        title:'Failed please check!',
        message:'Failed',
        variant: 'warning',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
    });
  }


}
