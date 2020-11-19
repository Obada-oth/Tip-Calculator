// Your code goes in here
// debugger;
document.querySelector('#header').innerText = 'Tip Calculator';
calculate.addEventListener('click', calculateTip);
function calculateTip() {
  const billAmount = document.getElementById('bill-amount');
  const serviceRating = document.getElementById('service-rating');
  const peopleCount = document.getElementById('people-count');
  const calculate = document.getElementById('calculate');
  const outPut = document.getElementById('tip-amount');
  const each = document.getElementById('each');

  if (
    !billAmount.value ||
    !serviceRating.value ||
    !peopleCount.value ||
    serviceRating.value === '--Choose an option--' ||
    billAmount.value === '0' ||
    peopleCount.value === '0'
  ) {
    alert('All fields must be filled');
    input;
  } else {
    billAmount.value === billAmount.innerText;
    serviceRating.value === serviceRating.innerText;
    peopleCount.value === peopleCount.innerText;
    if (peopleCount.value > 1) {
      each.innerText = 'each';
    } else {
      each.innerText = ' ';
    }
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });

    switch (serviceRating.value) {
      case '30% - Outstanding':
        outPut.innerText = formatter.format((billAmount.value * (30 / 100)) / peopleCount.value);
        console.log(outPut.innerText);
        break;
      case '20% - Good':
        outPut.innerText = formatter.format((billAmount.value * (20 / 100)) / peopleCount.value);
        break;
      case '15% - It was OK':
        outPut.innerText = formatter.format((billAmount.value * (15 / 100)) / peopleCount.value);
        break;
      case '10% - Bad':
        outPut.innerText = formatter.format((billAmount.value * (10 / 100)) / peopleCount.value);
        break;
      case '5% - Terrible':
        outPut.innerText = formatter.format((billAmount.value * (5 / 100)) / peopleCount.value);
        break;

      default:
        break;
    }
  }

  // return (output.innerText = (billAmount.value * 10) / 100 + serviceRating.value);
}

// console.log(billAmount.value);
// calculateTip();
