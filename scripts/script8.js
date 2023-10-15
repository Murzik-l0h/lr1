var icecream = document.getElementById("icecream");
var chocolate = document.getElementById("chocolate");
var text=document.getElementById("text");
var textAlert=document.getElementById("testText")

function output() {
  var InputValue=text.value;
  if (InputValue.length>=1){
  if (!/^[А-Яа-яA-Za-zіІїЇЄєь'\s-]+$/.test(text.value)) {
      var alertValue=textAlert.value
      alertValue="Ім'я студента повинно містити тільки букви і не містити цифр або спеціальних символів.";
            textAlert.style.color = "red";
            textAlert.innerText = alertValue;
            setTimeout(function() {
                textAlert.style.color = "";
                textAlert.innerText = "";І 
            }, 2000);
  }
  else{
  if (chocolate.checked && icecream.checked) {
    alert("Обрано морозиво та шоколад");
  } else if (icecream.checked) {
    alert("Обрано морозиво");
  } else if (chocolate.checked) {
    alert("Обрано шоколад");
  } else {
    alert("Ви нічого не обрали");
  }
  alert("Дякую за участь в опитуванні");
  }
}
else{
  var alertValue=textAlert.value
  alertValue="Введіть будь ласка текст!";
        textAlert.style.color = "red";
        textAlert.innerText = alertValue;
        setTimeout(function() {
            textAlert.style.color = "";
            textAlert.innerText = "";
        }, 1500);
}
}
var outputbutton = document.getElementById("output");
outputbutton.addEventListener("click", output);
