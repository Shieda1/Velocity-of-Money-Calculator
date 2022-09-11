// https://www.omnicalculator.com/finance/velocity-of-money

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const velocityofmoneyRadio = document.getElementById('velocityofmoneyRadio');
const sumofalltransactionRadio = document.getElementById('sumofalltransactionRadio');
const amountofmoneyincirculationRadio = document.getElementById('amountofmoneyincirculationRadio');

let velocityofmoney;
let sumofalltransaction = v1;
let amountofmoneyincirculation = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

velocityofmoneyRadio.addEventListener('click', function() {
  variable1.textContent = 'Sum of all transaction';
  variable2.textContent = 'Amount of money in circulation';
  sumofalltransaction = v1;
  amountofmoneyincirculation = v2;
  result.textContent = '';
});

sumofalltransactionRadio.addEventListener('click', function() {
  variable1.textContent = 'Velocity of money';
  variable2.textContent = 'Amount of money in circulation';
  velocityofmoney = v1;
  amountofmoneyincirculation = v2;
  result.textContent = '';
});

amountofmoneyincirculationRadio.addEventListener('click', function() {
  variable1.textContent = 'Velocity of money';
  variable2.textContent = 'Sum of all transaction';
  velocityofmoney = v1;
  sumofalltransaction = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(velocityofmoneyRadio.checked)
    result.textContent = `Velocity of money = ${computevelocityofmoney().toFixed(2)}`;

  else if(sumofalltransactionRadio.checked)
    result.textContent = `Sum of all transaction = ${computesumofalltransaction().toFixed(2)}`;

  else if(amountofmoneyincirculationRadio.checked)
    result.textContent = `Amount of money in circulation = ${computeamountofmoneyincirculation().toFixed(2)}`;
})

// calculation

function computevelocityofmoney() {
  return Number(sumofalltransaction.value) / Number(amountofmoneyincirculation.value);
}

function computesumofalltransaction() {
  return Number(velocityofmoney.value) * Number(amountofmoneyincirculation.value);
}

function computeamountofmoneyincirculation() {
  return Number(sumofalltransaction.value) / Number(velocityofmoney.value);
}