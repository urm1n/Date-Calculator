function calculateDifference() {
    const date1 = new Date(document.getElementById("date1").value);
    const date2 = new Date(document.getElementById("date2").value);
    const resultContainer = document.getElementById("result");
  
    if (!date1 || !date2) {
      alert("Please select both dates.");
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

