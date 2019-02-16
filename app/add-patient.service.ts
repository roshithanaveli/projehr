import { Injectable } from '@angular/core';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class AddPatientService {

  patient: Patient;
  visittype: string[]; 

  constructor() {
    this.visittype = ['Emergency Visit', 'Normal Visit'];
    this.patient = new Patient({
      providerName: '',
      patientName:'',
      appointmentDate:'',
      visit:this.visittype[0],
      next_visit:'' 
      //{ emergency: '' , normal: ''}
      });

   }

  getPatient(): Patient {
    return this.patient;
  }

}
