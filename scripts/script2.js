function showInfo() {
  var userName = document.querySelector(".userName").value;
  var userSurname = document.querySelector(".userSurname").value;
  var whiteListChar = /^[a-zA-Zа-яА-ЯіІїЇЄєь']+$/;
  
  if (userName.trim() === "" || userSurname.trim() === "") {
    alert("Будь ласка, заповніть усі поля.");
  } else if (userName.includes(" ") || userSurname.includes(" ")) {
    alert("Введіть значення без пробілів");
  } else if (!whiteListChar.test(userName) || !whiteListChar.test(userSurname)) {
    alert("Введіть прізвище та ім'я використовуючи тільки українські чи англійські літери та знак апострофу");
  } else {
    alert(`ім'я: ${userName}\nпрізвище: ${userSurname}`);
  }
}і
