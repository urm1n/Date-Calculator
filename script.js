// Set end date to current date by default
document.getElementById("end-date").valueAsDate = new Date();

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function calculateDifference() {
  const startDate = new Date(document.getElementById("start-date").value);
  const endDate = new Date(document.getElementById("end-date").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    resultDiv.textContent = "Please select both dates.";
    return;
  }

  // Calculate the difference in milliseconds
  let differenceInTime = endDate - startDate;
  let isNegative = false;

  // If end date is earlier, make the difference negative
  if (differenceInTime < 0) {
    isNegative = true;
    differenceInTime = Math.abs(differenceInTime);
  }

  // Calculate difference in days, months, and years
  const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  let message = "";

  if (days < 30) {
    message = `${isNegative ? "-" : ""}${days} day(s)`;
  } else if (days < 365) {
    message = `${isNegative ? "-" : ""}${months} month(s) and ${days % 30} day(s)`;
  } else {
    message = `${isNegative ? "-" : ""}${years} year(s), ${months % 12} month(s), and ${days % 30} day(s)`;
  }

  // Format dates and display result
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);

  resultDiv.textContent = `Difference between ${formattedStartDate} and ${formattedEndDate} is: ${message}.`;
}
