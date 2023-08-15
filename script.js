function showFormFields() {
    var loanType = document.getElementById("loanType").value;
    var fields = document.getElementsByClassName("fields");
    
    for (var i = 0; i < fields.length; i++) {
      fields[i].style.display = "none";
    }
    
    document.getElementById(loanType + "Fields").style.display = "block";
  }
  showFormFields();
  
  function calculateMonthlyPayment() {
    var loanType = document.getElementById("loanType").value;
    var monthlyPayment = 0;
    
  
    // Perform calculations based on selected loan type and input values
    // For simplicity, we'll just set the monthlyPayment to a fixed value for the example
    
    if (loanType === "purchase") {
      // Calculate Monthly Payment for Purchase Loan Type
      function calculatePurchaseMonthly() {
        console.log("purchase");
        alert("Purchase!");
      }
      calculatePurchaseMonthly(); // Call the function
  
    } else if (loanType === "refinance") {
      // Calculate Monthly Payment for Re-Finance Loan Type
      function calculateReFiMonthly() {
        console.log("Re-finance");
        alert("Re-finance!");
      }
      calculateReFiMonthly(); // Call the function
  
    } else if (loanType === "fixflip") {
      // Calculate Monthly Payment for Fix and Flip Loan Type
      function calculateFixFlipMonthly() {
        console.log("Fix Flip");
        alert("Fixxy Flip!");
      }
      calculateFixFlipMonthly(); // Call the function
    }
    
    // Display results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + monthlyPayment + "</p>";
  }
  calculateMonthlyPayment();
  