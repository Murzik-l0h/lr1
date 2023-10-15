var numberOfStudents = prompt("Введіть кількість студентів:");
var listOfStudents = {};
var whiteListChar = /[^a-zA-Zа-яА-ЯІіЇїЄєь'\s-]/;

while (isNaN(numberOfStudents) || !Number.isInteger(Number(numberOfStudents))) {
  alert("Введено некоректне число студентів. Будь ласка, спробуйте ще раз.");
  numberOfStudents = prompt("Введіть кількість студентів:");
}

for (var i = 0; i < numberOfStudents; i++) {
  var nameStudents = prompt("Введіть ім'я та прізвище студента:");
  var nameParts = nameStudents.split(" ");

  if (nameParts.length < 2) {
    alert("Введено неправильний формат. Будь ласка, введіть ім'я та прізвище студента.");
    i--;
    continue;
  }

  if (whiteListChar.test(nameStudents)) {
    alert("Введено неправильний символ");
    i--;
    continue;
  }

  if (listOfStudents[i-1] == nameStudents) {
    if(confirm("Студент з таким ім'ям існує, ввести ще раз?") != true){
      i--;
      continue;
    }
  }

  listOfStudents[i] = nameStudents
  document.write(listOfStudents[i] + "<br>");
}