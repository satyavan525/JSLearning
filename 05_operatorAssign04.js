function tcsInterview(gradScore, hscScore, sscScore, candidateName){
    var result=gradScore>=70 || hscScore>=80 || sscScore>=90
     ? `Congrats ${candidateName} you are eligible for TCS interview` 
     : `${candidateName} Unfortunately you are not eligible for interview`;
    console.log(result);


}
tcsInterview(80, 86, 90, "Satyavan");
tcsInterview(70, 65, 55, "Anirudh");
tcsInterview(60, 79, 88, "Rohit")