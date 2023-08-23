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
            var purchasePrice = parseFloat(document.getElementById("purchasePrice").value);
            var purchasedownPayment = parseFloat(document.getElementById("purchasedownPayment").value);
            var purchaseTerm = parseFloat(document.getElementById("purchaseTerm").value);
            var purchaseAnnualTaxes = parseFloat(document.getElementById("purchaseAnnualTaxes").value);
            var purchaseInterestRate = parseFloat(document.getElementById("purchaseInterestRate").value);
            var purchaseAnnualInsurance = parseFloat(document.getElementById("purchaseAnnualInsurance").value);
            var purchaseMonthHoa = parseFloat(document.getElementById("purchaseMonthHoa").value);
            // End Collect Field Variables
            
            // Validate all fields have been filled in
            if (purchasePrice < 1) {
                alert("Please Enter a Purchase Price.");
                return;
            } else if (purchasedownPayment < 1) {
                alert("Please Enter a Down Payment.");
                return;
            } else if (purchaseAnnualTaxes < 1) {
                alert("Please Enter Annual Taxes.");
                return;
            } else if (purchaseInterestRate < 0){
                alert("Please Enter Annual Interest Rate.");
                return;
            } else if (purchaseAnnualInsurance < 1) {
                alert("Please Enter Annual Insurance Rate.");
                return;
            } else if (purchaseMonthHoa < 1) {
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
        var refinanceMonthlyHoaFees = parseFloat(document.getElementById("refinanceMonthHoa").value);
        // End Collect Field Variables

        // Validate all fields have been filled in
        if (refinanceMarketValue < 1) {
            alert("Please Enter Market Vaule.");
        } else if (refinanceAnnualTaxes < 1) {
            alert("Please Enter Annual Taxes.");
        } else if (refinanceInterestRate < 0){
            alert("Please Enter Annual Interest Rate.");
        } else if (refinanceAnnualInsurance < 1) {
            alert("Please Enter Annual Insurance Rate.");
        } else if (refinanceMonthHoa < 1) {
            refinanceMonthHoa === 0;
        } else if (refinanceMortBalance < 1) {
            alert("Please Enter Remaining Mortgage Balance.");
        } else {
            console.log(refinanceMonthHoa);
        }
        // End Field Validations

        //The Calculations
        var monthlyInterestRate = refinanceInterestRate / 12;
        var numberOfPayments = refinanceTermYears * 12;

        var monthlyPayment = (refinanceMarketValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
            (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

        var totalMonthlyPayment = monthlyPayment + (refinanceAnnualTaxes / 12) + (refinanceAnnualInsurance / 12) + refinanceMonthlyHoaFees;

        // Calculate the difference between the new loan amount and the current mortgage balance
        var loanDifference = refinanceMarketValue - refinanceMortBalance;
        // If the loan difference is positive (increased loan amount), add it to the total monthly payment
        if (loanDifference > 0) {
            totalMonthlyPayment += loanDifference / numberOfPayments;
        }
        //End of The Calculations

        // Display results
        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "<h2>Total Monthly Payment:</h2><p>$" + totalMonthlyPayment.toFixed(2) + "</p>";

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
            var fixflipdownPayment = parseFloat(document.getElementById("fixflipdownPayment").value);
            var fixflipTerm = parseFloat(document.getElementById("fixflipTerm").value);
            var fixflipAnnualTaxes = parseFloat(document.getElementById("fixflipAnnualTaxes").value);
            var fixflipInterestRate = parseFloat(document.getElementById("fixflipInterestRate").value);
            var fixflipAnnualInsurance = parseFloat(document.getElementById("fixflipAnnualInsurance").value);
            var fixflipMonthHoa = parseFloat(document.getElementById("fixflipMonthHoa").value);
            // End Collect Field Variables

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
            } else if (fixflipPurchase < 1) {
                alert("Please Enter Purchase Price.");
            } else if (fixflipRenovate < 1) {
                alert("Please Enter Renovation Price.");
            } else {
                console.log("fixflipMonthHoa");
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
  