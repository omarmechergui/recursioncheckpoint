//Leap Year Checker

function isLeapYear(year) {
    return (year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0))
}



//Ticket Pricing
function ticketPrice(age) {
    if (age <= 12) {
        return "$10"
    } else if (13 <= age && age <= 17) {
        return "$15"
    }
    else {
        return "$20"
    }
}

//Weather Clothing Adviser

function weatherClothingAdviser() {
    const temperature = parseFloat(prompt("Please enter the current temperature in degrees Celsius:"));
    const isRaining = prompt("Is it raining? (yes/no):").toLowerCase() === "yes";
  
    if (isRaining) {
      if (temperature <= 10) {
        alert("Wear a warm coat, hat, gloves, and boots.");
      } else if (temperature <= 15) {
        alert("Wear a jacket, a warm sweater, and waterproof boots.");
      } else if (temperature <= 20) {
        alert("Wear a light jacket, a sweater, and waterproof shoes.");
      } else {
        alert("Wear a light jacket and waterproof shoes.");
      }
    } else {
      if (temperature <= 10) {
        alert("Wear a warm coat, hat, and gloves.");
      } else if (temperature <= 15) {
        alert("Wear a jacket and a warm sweater.");
      } else if (temperature <= 20) {
        alert("Wear a light jacket or a sweater.");
      } else {
        alert("Wear light clothing.");
      }
    }
  }
  


  function fib(n){
    if(n==1 ||n==0){
      return 1;
    }
    else{
      return fib(n-1) + fib(n-2);
    }
  }


  function paland(str){
    if (str.lenght==0 || str.lenght == 1){
        return true;

    }
    if(str[0]!=str[str.length-1]){
        return false;
    }
    else if(str.lenght>1){
        paland(str.slice(1,-1))
    }
    
    else{
        return true;
    }
  
}
    function power(x,y){
      if(y==0){
        return 1;
      }
      else{
        return x*power(x,y-1);
      }
    }