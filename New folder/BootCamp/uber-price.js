class bill{
    constructor(TaxiNo, PassengerName, TotalKm, Amount, baseAmount){
    this.TaxiNo = TaxiNo;
    this.PassengerName = PassengerName
    this.TotalKm = TotalKm
    this.Amount = Amount
    this.baseAmount = baseAmount
}
}

const bill1 = new bill("TN 05 AB 2584", "Ajith", 10, 2, 250)
const billAmount= (bill1.TotalKm)*(bill1.Amount)

console.log("Taxi No:" + bill1.TaxiNo, 
  "Bill Amount:" + billAmount)
