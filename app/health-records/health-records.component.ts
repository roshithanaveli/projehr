import { Component, OnInit, Input } from '@angular/core';
import { HealthRecord } from '../HealthRecord';
import { Patient } from '../Patient';
import {Router} from '@angular/router';
import {AddPatientService} from '../add-patient.service'; 

@Component({
  selector: 'app-health-records',
  templateUrl: './health-records.component.html',
  styleUrls: ['./health-records.component.css']
})
export class HealthRecordsComponent implements OnInit {

  patient: Patient;

  //temporary array to hold all selected values for a patient
  healthrec:any[];
  //object of HealthRecord class
  healthrecord: HealthRecord;
  //Diagnosis  array
  diagnosistype: any[];
  dropdownSettings:any
  //Procedure Array
  proceduretype=
  [
    {procedure_code : "0011", procedure_description : "Injection for fever"},
    {procedure_code : "0022", procedure_description : "Injection for Pain relief"},
    {procedure_code : "0030", procedure_description : "Drip – Hospital admission"},
    {procedure_code : "0078", procedure_description : "Surgery"},
    
    {procedure_code : "D001", procedure_description : "Dental cleanup"},
    {procedure_code : "D005", procedure_description : "Root canal "},
    {procedure_code : "D006", procedure_description : "Tooth removal"},
    {procedure_code : "V001", procedure_description : "Laser eye correction"},
    {procedure_code : "V002", procedure_description : "Specs for short/long sight"}

  ];

  //to get the selected diagnosis code
  diaginstant:string;
  todo:string;
  firstnumber:string;
  getindex:string;
  i:number;
  /* ****************************************** */
  //Different types of procedures starting with 
  procedureinstant:any[];
  // //zero
  // procedureinstantz:any[];
  // //v
  // procedureinstantv:any[];
  // //d
  // procedureinstantd:any[];
  
 //to store errors
  error:String;

  itemmm:any;
  //To get the Date 
  getnToday():string
  {
    return new Date().toISOString().split('T')[0]
  }

  //Initializing all variables through a constructor
  constructor(/*Router Initialization */public router:Router, private addPatientService:AddPatientService) {

    this.patient = this.addPatientService.patient;

    console.log(this.patient);

    //Different Diagnosis codes
  this.diagnosistype =
  [
    {diagnosis_code : "0010", diagnosis_description : "Cholera"},
    {diagnosis_code : "0020", diagnosis_description : "Typhoid fever"},
    {diagnosis_code : "0030", diagnosis_description : "Food Poisioning"},
    {diagnosis_code : "0078", diagnosis_description : "Intestinal diseases"},
    {diagnosis_code : "0801", diagnosis_description : "Lung infection"},
    {diagnosis_code : "0509", diagnosis_description : "Smallpox"},
    {diagnosis_code : "0001", diagnosis_description : "Common cold"},
    {diagnosis_code : "0001", diagnosis_description : "Open wound"},
    {diagnosis_code : "D001", diagnosis_description : "Dental decay"},
    {diagnosis_code : "V001", diagnosis_description : "Eye Checkup"}
  ];
  this.dropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  // ['Description','Cholera','Typhoid fever','Food Poisoning','Intestinal diseases','Lung infection','Smallpox','Common cold','Open wound','Dental decay','Eye Checkup'];
  //   this.proceduretype=
  //   [
  //     {procedure_code : "0011", procedure_description : "Injection for fever"},
  //     {procedure_code : "0022", procedure_description : "Injection for Pain relief"},
  //     {procedure_code : "0030", procedure_description : "Drip – Hospital admission"},
  //     {procedure_code : "0078", procedure_description : "Surgery"},
      
  //     {procedure_code : "D001", procedure_description : "Dental cleanup"},
  //     {procedure_code : "D005", procedure_description : "Root canal "},
  //     {procedure_code : "D006", procedure_description : "Tooth removal"},
  //     {procedure_code : "V001", procedure_description : "Laser eye correction"},
  //     {procedure_code : "V002", procedure_description : "Specs for short/long sight"}

  // ];
  // //Different Procedure Types
  // this.procedureinstantz=
  //   [
  //     {procedure_code : "0011", procedure_description : "Injection for fever"},
  //     {procedure_code : "0022", procedure_description : "Injection for Pain relief"},
  //     {procedure_code : "0030", procedure_description : "Drip – Hospital admission"},
  //     {procedure_code : "0078", procedure_description : "Surgery"}
  //   ];
  //   this.procedureinstantd=
  //   [
  //     {procedure_code : "D001", procedure_description : "Dental cleanup"},
  //     {procedure_code : "D005", procedure_description : "Root canal "},
  //     {procedure_code : "D006", procedure_description : "Tooth removal"}
  //    ];
  //    this.procedureinstantv=
  //    [
  //       {procedure_code : "V001", procedure_description : "Laser eye correction"},
  //     {procedure_code : "V002", procedure_description : "Specs for short/long sight"}
  //    ];
  /* ------------------------------------------------------------- */
  //['Injection for fever','Injection for Pain relief','Drip – Hospital admission','Surgery','Dental cleanup','Root canal','Tooth removal','Laser eye correction','Specs for short/long sight'];

  //Intializing the health Record Object
  this.healthrecord = new HealthRecord({
    symptoms: '',
    diagnosis:'',
    procedure:''
    //next_visit:''
    
    });
    //Initializing dummy variavle of health rec
    this.healthrec=[];
    this.procedureinstant=[];
    //this.getindex=this.healthrecord.diagnosis.toString().substr(1,1);
    //Logging 
    // console.log(this.getindex);
    console.log(this.healthrecord);
    //this.diaginstant=this.healthrecord.diagnosis.toString();
  }


  ngOnInit() {
    
  }
  onItemSelectt(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  //onItemSelect
  onItemSelect(item): void { 
  
    this.procedureinstant=[];
    this.itemmm = item.target.value;
    console.log(this.itemmm);
    this.getindex=this.itemmm.substr(0,1);
    console.log(this.getindex);
    for(this.i = 0;this.i<this.proceduretype.length;this.i++) { 
    if(this.proceduretype[this.i].procedure_code.charAt(0)==this.getindex) 
      {
        console.log(this.proceduretype[this.i]) ;
        console.log(this.proceduretype[this.i].procedure_code.charAt(0));
        this.procedureinstant.push(this.proceduretype[this.i]);
      }
    }
    for(this.i=0;this.i<this.procedureinstant.length;this.i++)
    {
      console.log(this.procedureinstant[this.i]);
    }
  }
  // enableEdit: boolean = false;


  //On Form Submission
 
  onFormSubmit({ value, valid}: { value: HealthRecord, valid: boolean }) {
    // Assigning the submitted form to healthRecord
    this.healthrecord = value;
    //pushing the value into the array for multple record

    this.healthrec.push(value);
    /**
     * getting the code of diagnosis selected
    this.todo=this.healthrecord.diagnosis.toString();
    //first value of selected diagnosis type
    this.firstnumber=this.todo.substr(0,1);
    console.log( this.healthrecord);
    console.log(this.todo);
    console.log(this.todo.substr(0,1));
    console.log(this.firstnumber);
     */
    
    console.log('valid: ' + valid);
    console.log(this.healthrec);
    //After the submitting and validating , through the router navigation, it is rediricting to HealthRecords page
    this.router.navigate(['HealthRecordss']);
  }
  //Another Event on clicking for submitting with out or with filling atleast one data
  onClickMe(){
    if(this.healthrec.length<1)
    {
    this.error='Please add the benefit details';
    this.router.navigate(['HealthRecordss']);
    }
    else
    {
      this.router.navigate(['home'])
    }
  }
  
  
  show:boolean = false;
  c:number=0;

  toggle() {
    if(this.c==0)
    {
      this.show = !this.show;
      this.c=1;
    }
    
  }
}

// onSubmit({ value, valid}: { value: Benefits, valid: boolean }) {
//   this.benefit = value;
//   this.benefits.push(this.benefit);
//   console.log( this.benefit);
//   console.log('valid: ' + valid);
//   this.router.navigate(['benefitdetails'])
// }
// onClickMe(){
// if(this.benefits.length<1)
// {
// this.error='Please add the benefit details';
// this.router.navigate(['benefitdetails'])
// }
// else
// {
// this.router.navigate(['home'])
// }
