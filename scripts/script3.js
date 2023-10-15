var monthInput = prompt("Введіть номер місяця від 1 до 12:");

if (!/[^0-12]/.test(monthInput)) {
  alert("Некоректний номер місяця. Введіть значення від 1 до 12.");
} else {
  var monthNumber = parseInt(monthInput);
  var seasons = ["Зима", "Весна", "Літо", "Осінь"];
  var rightAnswer = "";
  
  if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
    if (monthNumber >= 3 && monthNumber <= 5) {
      rightAnswer = seasons[1];
    } else if (monthNumber >= 6 && monthNumber <= 8) {
      rightAnswer = seasons[2];
    } else if (monthNumber >= 9 && monthNumber <= 11) {
      rightAnswer = seasons[3];
    } else {
      rightAnswer = seasons[0];
    }

    alert(`Пора року - ${rightAnswer}`);
  }
}