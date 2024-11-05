function calculateDifference() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const resultDiv = document.getElementById("result");
  
    if (!startDate || !endDate) {
      resultDiv.textContent = "Please select both dates.";
      return;
    }
  
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const differenceInTime = end - start;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  
    if (differenceInDays < 0) {
      resultDiv.textContent = "End date should be after start date.";
    } else {
      resultDiv.textContent = `The difference is ${differenceInDays} day(s).`;
    }
  }
  