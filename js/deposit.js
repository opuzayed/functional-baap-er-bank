
document.getElementById('btn-deposit').addEventListener('click', function(){
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getElementValueById('deposit-total');
 
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  //set total deposit amount
  setElementValueById('deposit-total', newDepositTotal);

  //get previous balance by using function
   const previousBalanceTotal = getElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   setElementValueById('balance-total', newBalanceTotal);
   })