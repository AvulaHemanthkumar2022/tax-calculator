document.getElementById("calculateBtn").addEventListener("click", function() {
    // Fetch input values
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    // Fetch other input values similarly for extra income, deductions, and age dropdown
    
    // Validate input
    var errors = false;
    if (isNaN(grossIncome)) {
      document.getElementById("grossIncomeError").innerText = "Invalid input";
      errors = true;
    } else {
      document.getElementById("grossIncomeError").innerText = "";
    }
    // Validate other input fields similarly
    
    if (!errors) {
      // Calculate tax
      var tax = 0;
      if (grossIncome > 800000) {
        // Fetch age from dropdown and calculate tax accordingly
        // Add age dropdown logic
      }
      
      // Display result in modal
      document.getElementById("result").innerText = "Tax amount: " + tax;
      document.getElementById("modal").style.display = "block";
    }
  });
  
  // Close modal when close button is clicked
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });