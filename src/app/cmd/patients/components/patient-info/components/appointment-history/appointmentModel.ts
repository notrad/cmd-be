export class appointmentModel {
    
    doctorName!: string;
    
    specialisation!: string;
    
    time!: string;
  
    date!: string;
  
    description!: string;

    comment!: string;

    test!: string;

    constructor( doctorName: string,
    
      specialisation: string,
      
      time: string,
    
      date: string,
    
      description: string,
      
      comment: string,

      test: string
    ){
     this.doctorName= doctorName;
     this.specialisation= specialisation;
     this.time= time;
     this.date= date;
     this.description= description;
     this.comment = comment;
     this.test = test;
    }
  }