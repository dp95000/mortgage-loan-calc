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
      // CALCULATE MONTHLY PAYMENT FOR PURCHASE LOAN TYPE
      function calculatePurchaseMonthly() {
            // Collect Field Variables
            var purchasePrice = document.getElementById("purchasePrice").value;
            var purchasedownPayment = parseFloat(document.getElementById("purchasedownPayment").value);
            var purchaseTerm = parseFloat(document.getElementById("purchaseTerm").value);
            var purchaseAnnualTaxes = parseFloat(document.getElementById("purchaseAnnualTaxes").value);
            var purchaseInterestRate = parseFloat(document.getElementById("purchaseInterestRate").value);
            var purchaseAnnualInsurance = parseFloat(document.getElementById("purchaseAnnualInsurance").value);
            var purchaseMonthHoa = parseFloat(document.getElementById("purchaseMonthHoa").value);
            // End Collect Field Variables
            
            // Validate all fields have been filled in
            if (isNaN(purchasePrice) || purchasePrice < 1) {
                alert("Please Enter a Purchase Price.");
                return;
            } else if (isNaN(purchasedownPayment) || purchasedownPayment < 1) {
                alert("Please Enter a Down Payment.");
                return;
            } else if (isNaN(purchaseAnnualTaxes) || purchaseAnnualTaxes < 1) {
                alert("Please Enter Annual Taxes.");
                return;
            } else if (isNaN(purchaseInterestRate) || purchaseInterestRate < 0) {
                alert("Please Enter Annual Interest Rate.");
                return;
            } else if (isNaN(purchaseAnnualInsurance) || purchaseAnnualInsurance < 1) {
                alert("Please Enter Annual Insurance Rate.");
                return;
            } else if (isNaN(purchaseMonthHoa) || purchaseMonthHoa < 1) {
                purchaseMonthHoa = 0; // Corrected the assignment
            } else {
                console.log("purchaseMonthHoa: " + purchaseMonthHoa); // Corrected the console.log
            }
            // End Field Validations

            //The Calculations
            var purchaseLoanAmount = purchasePrice - purchasedownPayment;
            var convertPurchaseInterest = purchaseInterestRate / 100;
            var purchaseMonthlyInterestRate = convertPurchaseInterest / 12; // Corrected
            var purchaseNumberOfPayments = purchaseTerm * 12;

            var PurchaseMonthlyPayment = (purchaseLoanAmount * purchaseMonthlyInterestRate * Math.pow(1 + purchaseMonthlyInterestRate, purchaseNumberOfPayments)) /
            (Math.pow(1 + purchaseMonthlyInterestRate, purchaseNumberOfPayments) - 1);

            var PurchaseTotalMonthlyPayment = PurchaseMonthlyPayment + (purchaseAnnualTaxes / 12) + (purchaseAnnualInsurance / 12) + purchaseMonthHoa;
            var results = PurchaseTotalMonthlyPayment.toFixed(2);
            console.log("Total Monthly Payment: $" + results);
            //End of The Calculations

            // Display results
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + results + "</p>";

      }
      calculatePurchaseMonthly(); // Call the function
      // END OF PURCHASE CALCULATIONS
      /////////////////////////////////////////////////////
  
    } else if (loanType === "refinance") {
      // CALCULATE MONTHLY PAYMENT FOR RE-FINANCE LOAN TYPE
    function calculateReFiMonthly() {
        // Collect Field Variables
        var refinanceMarketValue = parseFloat(document.getElementById("refinanceMarketValue").value);
        var refinanceTermYears = parseInt(document.getElementById("refinanceTerm").value);
        var refinanceMortBalance = parseFloat(document.getElementById("refinanceMortBalance").value); // Added
        var refinanceAnnualTaxes = parseFloat(document.getElementById("refinanceAnnualTaxes").value);
        var refinanceAnnualInsurance = parseFloat(document.getElementById("refinanceAnnualInsurance").value);
        var refinanceInterestRate = parseFloat(document.getElementById("refinanceInterestRate").value) / 100;
        var refinanceMonthHoa = parseFloat(document.getElementById("refinanceMonthHoa").value);
        // End Collect Field Variables
  
        // Validate all fields have been filled in
        if (isNaN(refinanceMarketValue) || refinanceMarketValue < 1) {
            alert("Please Enter a Valid Market Value.");
            return;
        } else if (isNaN(refinanceMortBalance) || refinanceMortBalance < 1) {
            alert("Please Enter a Valid Remaining Mortgage Balance.");
            return;
        } else if (isNaN(refinanceAnnualTaxes) || refinanceAnnualTaxes < 1) {
            alert("Please Enter Valid Annual Taxes.");
            return;
        } else if (isNaN(refinanceInterestRate) || refinanceInterestRate < 0) {
            alert("Please Enter a Valid Annual Interest Rate.");
            return;
        } else if (isNaN(refinanceAnnualInsurance) || refinanceAnnualInsurance < 1) {
            alert("Please Enter Valid Annual Insurance Rate.");
            return;
        } else if (isNaN(refinanceMonthHoa) || refinanceMonthHoa < 0) {
            refinanceMonthHoa = 0;
        } else {
            console.log("refinanceMonthHoa: " + refinanceMonthHoa);
        }
        // End Field Validations
    
        //The Calculations
        var refinanceMonthlyInterestRate = refinanceInterestRate / 12;
        var refinanceNumberOfPayments = refinanceTermYears * 12;
    
        var refinanceMonthlyPayment = (refinanceMortBalance * refinanceMonthlyInterestRate * Math.pow(1 + refinanceMonthlyInterestRate, refinanceNumberOfPayments)) /
        (Math.pow(1 + refinanceMonthlyInterestRate, refinanceNumberOfPayments) - 1);
    
        var refinanceTotalMonthlyPayment = refinanceMonthlyPayment + (refinanceAnnualTaxes / 12) + (refinanceAnnualInsurance / 12) + refinanceMonthHoa;
    
        // Display results
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + refinanceTotalMonthlyPayment.toFixed(2) + "</p>";
  }
  
  calculateReFiMonthly(); // Call the function
  
      //END OF REFINANCE CACLUATIONS 
      /////////////////////////////////////////////////////
  
    } else if (loanType === "fixflip") {
      // CALCULATE MONTHLY PAYMENT FOR FIX AND FLIP LOAN TYPE
      function calculateFixFlipMonthly() {
        
            // Collect Field Variables
            var fixflipPurchase = parseFloat(document.getElementById("fixflipPurchase").value);
            var fixflipRenovate = parseFloat(document.getElementById("fixflipRenovate").value);
            var fixflipTerm = parseFloat(document.getElementById("fixflipTerm").value);
            var fixflipdownPayment = parseFloat(document.getElementById("fixflipdownPayment").value);
            var fixflipAnnualTaxes = parseFloat(document.getElementById("fixflipAnnualTaxes").value);
            var fixflipInterestRate = parseFloat(document.getElementById("fixflipInterestRate").value);
            var fixflipAnnualInsurance = parseFloat(document.getElementById("fixflipAnnualInsurance").value);
            var fixflipMonthHoa = parseFloat(document.getElementById("fixflipMonthHoa").value);
            // End Collect Field Variables

            // Validate all fields have been filled in
            if (isNaN(fixflipPurchase) || fixflipPurchase <1 ) {
                alert("Please Enter Purchase Price.");
                return;
            } else if (isNaN(fixflipRenovate) || fixflipRenovate < 1) {
                alert("Please Enter Renovation Price.");
                return;
            } else if (isNaN(fixflipdownPayment) || fixflipdownPayment < 1) {
                alert("Please Enter a Down Payment.");
                return;
            } else if (isNaN(fixflipAnnualTaxes) || fixflipAnnualTaxes < 1) {
                alert("Please Enter Annual Taxes.");
                return;
            } else if (isNaN(fixflipInterestRate) || fixflipInterestRate < 1){
                alert("Please Enter Annual Interest Rate.");
                return;
            } else if (isNaN(fixflipAnnualInsurance) || fixflipAnnualInsurance < 1) {
                alert("Please Enter Annual Insurance Rate.");
                return;
            } else if (isNaN(fixflipMonthHoa) || fixflipMonthHoa < 0) {
                fixflipMonthHoa = 0;
                console.log("fixflipMonthHoa: " + fixflipMonthHoa);
            } else {
                console.log("finished");
            }
            // End Field Validations

            //The Calculations
            var fixflipLoanAmount = fixflipPurchase + fixflipRenovate - fixflipdownPayment;
            var fixflipMonthlyInterestRate = fixflipInterestRate / 12;
            var fixflipNumberOfPayments = fixflipTerm * 12;
          
            var fixflipMonthlyPayment = (fixflipLoanAmount * fixflipMonthlyInterestRate * Math.pow(1 + fixflipMonthlyInterestRate, fixflipNumberOfPayments)) /
              (Math.pow(1 + fixflipMonthlyInterestRate, fixflipNumberOfPayments) - 1);
          
            var fixflipTotalMonthlyPayment = fixflipMonthlyPayment + (fixflipAnnualTaxes / 12) + (fixflipAnnualInsurance / 12) + fixflipMonthHoa;
          
            var resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + fixflipTotalMonthlyPayment.toFixed(2) + "</p>";

      }
      calculateFixFlipMonthly(); // Call the function
    }
    // END FIX FLIP CALCULATIONS
    /////////////////////////////////////////////////////
    
    // Display results functions used to here. making note for reference
  }
  calculateMonthlyPayment();
  