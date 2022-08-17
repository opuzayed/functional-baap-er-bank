function getInputFieldValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputFieldValueString = inputField.value;
const inputFieldValue = parseFloat(inputFieldValueString);
inputField.value = '';

return inputFieldValue;
}

function getElementValueById(elementId)
{
   const element = document.getElementById(elementId);
   const elementValueString = element.innerText;
   const value = parseFloat(elementValueString);

   return value;
}

function setElementValueById(elementId, newValue)
{
   const textElement = document.getElementById(elementId);
   textElement.innerText = newValue;
}
document.getElementById('btn-deposit').addEventListener('click', function(){
  const newDepositAmount = getInputFieldValueById('deposit-field');
  const previousDepositTotal = getElementValueById('deposit-total');
 
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  //set total deposit amount
  setElementValueById('deposit-total', newDepositTotal);
})