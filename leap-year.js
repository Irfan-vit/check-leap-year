var dateInput = document.querySelector("#input-date");
var btn = document.querySelector("#btn-check");
var outputText = document.querySelector("#txt-output");


btn.addEventListener("click",eventHandler);

function eventHandler(){
    var birthDate = new Date(dateInput.value);
    birthYear = birthDate.getFullYear();

    if(leapyear(birthYear)){
        outputText.innerText = "You were born on Leap Year.";
    }else{
        outputText.innerText = "You were not born on Leap Year.";
    }

}
function leapyear(number){
    let year = number;
    
    if(year%4==0){
        return true;

    }else if(year%100==0){
        return true;

    }else if(year%400==0){
        return true;
    
    }
}