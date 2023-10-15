var table = document.getElementById("table");
var tableHTML = "<tr><th>Х</th>";
for (var i = 1; i <= 10; i++) {
  tableHTML += `<th>${i}</th>`;
}
tableHTML += "</tr>";
for (var i = 1; i <= 10; i++) {
  tableHTML += `<tr><th>${i}</th>`;
  for (var j = 1; j <= 10; j++) {
    tableHTML += `<td>${i * j}</td>`;
  }
  tableHTML += "</tr>";
}
table.innerHTML = tableHTML;