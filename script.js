const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices = document.querySelectorAll('.prices')
	let total = 0;
	prices.forEach(cell => {
		total += parseFloat(cell.textContent.trim());
	})
	let table = document.querySelector("table"); // assumes you have only one table
  let row = document.createElement("tr");
  let cell = document.createElement("td");

  // Span across all columns
  cell.setAttribute("colspan", "2");
  cell.textContent = "Total Price = " + total;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

