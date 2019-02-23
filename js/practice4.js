function calculateTip() {
    let billAmount = document.getElementById("bill").value;
    if (billAmount == "") {
      document.getElementById("bill").focus();
      return false;
    }
  
    let tipPercent = document.getElementById("tipPercent").value;
    if (tipPercent == "") {
      document.getElementById("tipPercent").focus();
      return false;
    }
    let numOfPeople = document.getElementById("numOfPeople").value;
    if (numOfPeople == "") {
      document.getElementById("numOfPeople").focus();
      return false;
    }
  
    let splitAmount = (billAmount * (tipPercent / 100)) / numOfPeople;
  
    document.getElementById(
      "result"
    ).innerHTML = `<h2>Tip Amount $ ${splitAmount} / person</h2>`;
  }
  