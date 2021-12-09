const histval = document.getElementById("history-value");
const  number =  document.getElementsByName("number")
const otptval =  document.getElementById("output-value");
// function getOutput() {
//   return otptval.innerText;
// }

function reverseNumberFormat(number) {
  return Number(number.replace(/,/g, ""));
}

function printOutput(x){
    otptval = x.toString()
    histval.innerText=""
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id === "backspace") {
      if (getOutput().length != 0) {
        let str = getOutput().slice(0, getOutput().length - 1);
        otptval.innerText = str;
      }
    }
    if (this.id === "clear") {
      otptval.innerText = "";
    }
    if(this.id==="+"||this.id==="-"||this.id==="*"||this.id==="/"){
        var prevopr;
        var currentopr;
        if(!prevopr){
          prevopr = this.id  
        }else{
            currentopr = this.id
        }
        if(otptval!="" && histval===""){
            histval.innerText=otptval.innerText
            otptval.innerText=""
        }
        else if(histval!=""&& otptval!=""){
            switch(prevopr){
                case "+": printOutput(Number(histval.innerText)+Number(otptval.innerText))
                    break;
                case "-": printOutput(Number(histval.innerText)-Number(otptval.innerText))
                    break;
                case "*": printOutput(Number(histval.innerText)*Number(otptval.innerText))
                    break;
                case "/": printOutput(Number(histval.innerText)/Number(otptval.innerText))
                    break;    
            } 
        }
    }
  });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var otpt = reverseNumberFormat(getOutput());
    if (otpt != NaN) {
      otpt = otpt + this.id;
      otptval.innerText = otpt;
    }
  });
}

