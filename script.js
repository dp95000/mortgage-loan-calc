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
            // Collect Field Variables
            var purchasePrice = document.getElementById("purchasePrice").value;
            var downPayment = document.getElementById("downPayment").value;
            var purchaseTerm = document.getElementById("purchaseTerm").value;
            var purchaseAnnualTaxes = document.getElementById("purchaseAnnualTaxes").value;
            var purchaseInterestRate = document.getElementById("purchaseInterestRate").value;
            var purchaseAnnualInsurance = document.getElementById("purchaseAnnualInsurance").value;
            var purchaseMonthHoa = document.getElementById("purchaseMonthHoa").value;
            
            // Validate all fields have been filled in
            if (purchasePrice < 1) {
                alert("Please Enter a Purchase Price.");
            } else if (downPayment < 1) {
                alert("Please Enter a Down Payment.");
            } else if (purchaseAnnualTaxes < 1) {
                alert("Please Enter Annual Taxes.");
            } else if (purchaseInterestRate < 1){
                alert("Please Enter Annual Interest Rate.");
            } else if (purchaseAnnualInsurance < 1) {
                alert("Please Enter Annual Insurance Rate.");
            } else if (purchaseMonthHoa < 1) {
                purchaseMonthHoa === 0;
            } else {
                console.log("purchaseMonthHoa");
            }
      }
      calculatePurchaseMonthly(); // Call the function
      // End of Purchase Calculations
  
    } else if (loanType === "refinance") {
      // Calculate Monthly Payment for Re-Finance Loan Type
      function calculateReFiMonthly() {
        var marketValue = document.getElementById("marketValue").value;
        var refinanceTerm = document.getElementById("refinanceTerm").value;
        var refinanceAnnualTaxes = document.getElementById("refinanceAnnualTaxes").value;
        var refinanceInterestRate = document.getElementById("refinanceInterestRate").value;
        var refinanceAnnualInsurance = document.getElementById("refinanceAnnualInsurance").value;
        var refinanceMonthHoa = document.getElementById("refinanceMonthHoa").value;

        // Validate all fields have been filled in
        if (marketValue < 1) {
            alert("Please Enter Market Vaule.");
        } else if (refinanceAnnualTaxes < 1) {
            alert("Please Enter Annual Taxes.");
        } else if (refinanceInterestRate < 1){
            alert("Please Enter Annual Interest Rate.");
        } else if (refinanceAnnualInsurance < 1) {
            alert("Please Enter Annual Insurance Rate.");
        } else if (refinanceMonthHoa < 1) {
            refinanceMonthHoa === 0;
        } else {
            console.log(refinanceMonthHoa);
        }

      }
      calculateReFiMonthly(); // Call the function
  
    } else if (loanType === "fixflip") {
      // Calculate Monthly Payment for Fix and Flip Loan Type
      function calculateFixFlipMonthly() {
             // Collect Field Variables
            var fixflipdownPayment = document.getElementById("fixflipdownPayment").value;
            var fixflipTerm = document.getElementById("fixflipTerm").value;
            var fixflipAnnualTaxes = document.getElementById("fixflipAnnualTaxes").value;
            var fixflipInterestRate = document.getElementById("fixflipInterestRate").value;
            var fixflipAnnualInsurance = document.getElementById("fixflipAnnualInsurance").value;
            var fixflipMonthHoa = document.getElementById("purchaseMonthHoa").value;
        // Validate all fields have been filled in
        if (fixflipdownPayment < 1) {
            alert("Please Enter a Down Payment.");
        } else if (fixflipAnnualTaxes < 1) {
            alert("Please Enter Annual Taxes.");
        } else if (fixflipInterestRate < 1){
            alert("Please Enter Annual Interest Rate.");
        } else if (fixflipAnnualInsurance < 1) {
            alert("Please Enter Annual Insurance Rate.");
        } else if (fixflipMonthHoa < 1) {
            fixflipMonthHoa === 0;
        } else {
            console.log("fixflipMonthHoa");
        }
      }
      calculateFixFlipMonthly(); // Call the function
    }
    
    // Display results
    var resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + monthlyPayment + "</p>";
  }
  calculateMonthlyPayment();
  