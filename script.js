// Function to format date as DD/MM/YYYY
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  // Set default dates on page load
  window.onload = function () {
    const today = new Date();
    document.getElementById("date2").value = formatDate(today);
  };
  
  function parseDate(input) {
    const parts = input.split("/");
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // month is zero-based
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  
  function calculateDifference() {
    const date1Input = document.getElementById("date1").value;
    const date2Input = document.getElementById("date2").value;
  
    if (!date1Input || !date2Input) {
      alert("Please select both dates in DD/MM/YYYY format.");
      return;
    }
  
    const date1 = parseDate(date1Input);
    const date2 = parseDate(date2Input);
    const resultContainer = document.getElementById("result");
  
    if (isNaN(date1) || isNaN(date2)) {
      alert("Invalid date format. Please use DD/MM/YYYY.");
      return;
    }
  
    // Calculate the difference in days
    const timeDifference = Math.abs(date2 - date1);
    const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  
    // Calculate the difference in months and years
    let yearDifference = date2.getFullYear() - date1.getFullYear();
    let monthDifference = date2.getMonth() - date1.getMonth();
  
    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }
  
    // Display the results with animation
    document.getElementById("daysDiff").textContent = `${dayDifference} days`;
    document.getElementById("monthsDiff").textContent = `${yearDifference * 12 + monthDifference} months`;
    document.getElementById("yearsDiff").textContent = `${yearDifference} years`;
  
    resultContainer.classList.add("visible");
  }
  