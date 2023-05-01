function calculate() {
    let billAmountValue = billAmount.value;
    let percentageAmountValue = percentageTip.value;
    if (billAmountValue === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else if (percentageAmountValue === "") {
        errorMessage.textContent = "Please Enter a Valid Input";
    } else {
        errorMessage.textContent = "";
        let totalBill = parseInt(billAmountValue);
        let totalPercentage = parseInt(percentageAmountValue);

        let calculateTip = (totalPercentage / 100) * totalBill;
        let calculateTotal = totalBill + calculateTip;
        tipAmount.value = calculateTip;
        totalAmount.value = calculateTotal;

    }
}