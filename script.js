const bankLoan= (value,month)=>{
    let lastMonthPlus=value%month
    for (let i = 1; i <= month-1; i++) {
    let monthlyPay=(value-lastMonthPlus)/month
    console.log(i+"ci ay- "+monthlyPay);
    }
    let lastMonth=(value-lastMonthPlus)/month+lastMonthPlus
    console.log(month+"ci ay- "+lastMonth);
}
console.log(bankLoan(2000,11));