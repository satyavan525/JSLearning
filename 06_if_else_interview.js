function tcsInterview(gradScore, hscScore, sscScore, candidateName){
    if(gradScore>=70 || hscScore>=80 || sscScore>=90){
      console.log(`Congrats ${candidateName} you are eligible for TCS interview`); 
    } 
      else{
         console.log(`${candidateName} Unfortunately you are not eligible for interview`);
      
    }
 }
 tcsInterview(80, 86, 90, "Satyavan");
 tcsInterview(70, 65, 55, "Anirudh");
 tcsInterview(60, 79, 88, "Rohit")