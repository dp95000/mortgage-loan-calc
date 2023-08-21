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
            } else if (purchaseInterestRate < 1){
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


            var convertPurchaseInterest = purchaseInterestRate / 100;
            var purchaseLoanAmount = purchasePrice - purchasedownPayment;
            console.log(purchaseLoanAmount);
            var purchaseMonthlyInterestRate = convertPurchaseInterest / 12;
            console.log(purchaseMonthlyInterestRate);
            var purchaseNumberOfPayments = purchaseTerm * 12;
            console.log(purchaseNumberOfPayments);

            var PurchaseMonthlyPayment = (purchaseLoanAmount * purchaseMonthlyInterestRate * Math.pow(1 + purchaseMonthlyInterestRate, purchaseNumberOfPayments)) /
            (Math.pow(1 + purchaseMonthlyInterestRate, purchaseNumberOfPayments) - 1);
        
            var PurchaseTotalMonthlyPayment = PurchaseMonthlyPayment + (purchaseAnnualTaxes / 12) + (purchaseAnnualInsurance / 12) + purchaseMonthHoa;
            var results = PurchaseTotalMonthlyPayment.toFixed(2);
            console.log("Total Monthly Payment: $" + results);

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
        // End Field Validations

      }
      calculateReFiMonthly(); // Call the function
      //END OF REFINANCE CACLUATIONS 
      /////////////////////////////////////////////////////
  
    } else if (loanType === "fixflip") {
      // CALCULATE MONTHLY PAYMENT FOR FIX AND FLIP LOAN TYPE
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
            // End Field Validations


      }
      calculateFixFlipMonthly(); // Call the function
    }
    // END FIX FLIP CALCULATIONS
    /////////////////////////////////////////////////////
    
    // Display results functions used to here. making note for reference
  }
  calculateMonthlyPayment();
  