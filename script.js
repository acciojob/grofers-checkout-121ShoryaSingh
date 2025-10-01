const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(cell => {
    total += parseFloat(cell.textContent.trim());
  });

  let table = document.querySelector("table"); // ✅ define table

  // remove old total row if it exists (so it doesn’t duplicate)
  let existingRow = document.getElementById("total-row");
  if (existingRow) existingRow.remove();

  let row = document.createElement("tr");
  row.setAttribute("id", "total-row");

  let cell = document.createElement("td");
  cell.setAttribute("colspan", "2");

  // ✅ add id="ans" for Cypress test
  cell.setAttribute("id", "ans"); 
  cell.textContent = "Total Price = " + total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
