<style>
.calc-main {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

.fields {
  display: none;
}

button {
  display: block;
  margin-top: 10px;
}

#results {
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  color: #fff;
  background-color: #009900;
}
#results h2 {color: #fff;}
</style>

<div class="calc-main">
  <!-- Select Loan Type Section -->
  <form id="mortgageForm">
    <label for="loanType">Loan Type:</label>
    <select id="loanType" onchange="showFormFields()">
      <option value="default">Please Select...</option>
      <option value="purchase">Purchase</option>
      <option value="refinance">Re-finance</option>
      <option value="fixflip">Fix &amp; Flip</option>
    </select>

    <div id="purchaseFields" class="fields">
      <!-- Purchase fields -->
      <label for="purchasePrice">Purchase Price:</label>
		<input type="number" id="purchasePrice" required>
	  <label for="downPayment">Down Payment:</label>
		<input type="number" id="downPayment" required>

	<label for="purchaseTerm">Mortgage Term:</label>
		  <select id="purchaseTerm">
			<option value="30">30 year</option>
			<option value="10">10 year</option>
			<option value="5">5 year</option>
			<option value="10">10 year (Interest Only)</option>
			<option value="10">5 year (Interest Only)</option>
		  </select>
      <!-- Other purchase fields... -->
	  <label for="purchaseAnnualTaxes">Annual Taxes:</label>
		<input type="number" id="purchaseAnnualTaxes" required>
	  <label for="purchaseInterestRate">Interest Rate:</label>
		<input type="number" id="purchaseInterestRate" required>
	  <label for="purchaseAnnualInsurance">Annual Insurance:</label>
		<input type="number" id="purchaseAnnualInsurance" required>
	  <label for="purchaseMonthHoa">Monthly HOA:</label>
		<input type="number" id="purchaseMonthHoa">
    </div>


    <div id="refinanceFields" class="fields">
      <!-- Refinance fields -->
      <label for="marketValue">Market Value:</label>
      <input type="number" id="marketValue" required>
      
	  <label for="refinanceTerm">Mortgage Term:</label>
		  <select id="refinanceTerm">
			<option value="30">30 year</option>
			<option value="10">10 year</option>
			<option value="5">5 year</option>
			<option value="10">10 year (Interest Only)</option>
			<option value="10">5 year (Interest Only)</option>
		  </select>

	<!-- Other refinance fields... -->
	  <label for="refinanceAnnualTaxes">Annual Taxes:</label>
		<input type="number" id="refinanceAnnualTaxes" required>
	  <label for="refinanceInterestRate">Interest Rate:</label>
		<input type="number" id="refinanceInterestRate" required>
	  <label for="refinanceAnnualInsurance">Annual Insurance:</label>
		<input type="number" id="refinanceAnnualInsurance" required>
	  <label for="refinanceHoa">Monthly HOA:</label>
		<input type="number" id="refinanceMonthHoa">
    </div>


    <div id="fixflipFields" class="fields">
      <!-- Fix & Flip fields -->
      <label for="fixflipTerm">Mortgage Term:</label>
      <select id="fixflipTerm">
        <option value="1">1 year</option>
        <option value="2">2 years</option>
      </select>
	<label for="fixflipdownPayment">Down Payment:</label>
		<input type="number" id="fixflipdownPayment" required>
      <!-- Other fix & flip fields... -->
	  <label for="fixflipAnnualTaxes">Annual Taxes:</label>
		<input type="number" id="purchaseAnnualTaxes" required>
	  <label for="purchaseInterestRate">Interest Rate:</label>
		<input type="number" id="purchaseInterestRate" required>
	  <label for="purchaseAnnualInsurance">Annual Insurance:</label>
		<input type="number" id="purchaseAnnualInsurance" required>
	  <label for="purchaseMonthHoa">Monthly HOA:</label>
		<input type="number" id="purchaseMonthHoa">
    </div>
    <button type="button" onclick="calculateMonthlyPayment()">Calculate</button>
  </form>
  <div id="results"></div>
</div

