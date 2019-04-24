function onReady() {
  const tipForm = document.querySelector('#tip-form');
  const tipContainer = document.querySelector('#tip-container');
  const tipAmount = tipContainer.querySelector('#tip-amount');

  tipForm.addEventListener('submit', calculateTip);

  function calculateTip(event) {
    event.preventDefault();

    const {bill, service, persons = 1} = Object.fromEntries([...new FormData(tipForm)]);

    if(!Number.isNaN(parseFloat(bill))) {
      const amount = (parseFloat(bill) * (parseInt(service) / 100)) / persons;
      
      tipAmount.innerHTML = amount.toFixed(2);
      tipContainer.classList.remove('hide');
    }
  }
}

document.addEventListener('DOMContentLoaded', onReady);
