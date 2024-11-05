function calculateDifference() {
    const startDateInput = document.getElementById('startDate').value;
    const endDateInput = document.getElementById('endDate').value || new Date().toISOString().split('T')[0]; // Default to today
  
    // Parse dates
    const startDate = new Date(startDateInput.split('/').reverse().join('-'));
    const endDate = new Date(endDateInput.split('/').reverse().join('-'));
  
    if (isNaN(startDate) || isNaN(endDate)) {
      document.getElementById('output').textContent = 'Please enter valid dates in DD/MM/YYYY format.';
      return;
    }
  
    // Calculate difference
    const differenceInTime = Math.abs(endDate - startDate);
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
    
    // Display result
    document.getElementById('output').textContent = `${differenceInDays} day(s)`;
  }
  