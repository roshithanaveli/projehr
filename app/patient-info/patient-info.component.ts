import { Component, OnInit } from '@angular/core';
import { Patient } from '../Patient';
import {Router} from '@angular/router';
import {AddPatientService} from '../add-patient.service'; 
@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  
  appointment:Date;
  
  patient: Patient;
  visittype: any[];
  
  getToday():string
  {
    return new Date().toISOString().split('T')[0]
  }

  constructor( public router:Router, private addPatientService:AddPatientService) 
  {
   
    this.visittype = ['Emergency Visit', 'Normal Visit'];
    this.patient = this.addPatientService.patient;
    // this.patient = new Patient({
    // providerName: '',
    // patientName:'',
    // appointmentDate:'',
    // visit:this.visittype[0],
    // next_visit:'' 
    // //{ emergency: '' , normal: ''}
    // });
  }

  // getVist(value:String)
  // {
  //   this.appointment=(Date)value;
  //   this.appointment.setDate(this.appointment.getDate()+1);
  //   return ;
  // }

  ngOnInit() {
  }
 
  onFormSubmit({ value, valid}: { value: Patient, valid: boolean }) 
  {
    this.patient = value;
    this.addPatientService.patient = this.patient;
    console.log( this.patient);
    console.log('valid: ' + valid);
    this.router.navigate(['HealthRecordss']);
    
  }

}
