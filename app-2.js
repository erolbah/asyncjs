document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const costumer = JSON.parse(this.responseText);

      const output = `
      <ul>
        <li>ID: ${costumer.id}</li>
        <li>ID: ${costumer.name}</li>
        <li>ID: ${costumer.company}</li>
        <li>ID: ${costumer.phone}</li>
      </ul>
      `;

      document.getElementById('customer').innerHTML = output;
    }
  }
// comment
  xhr.send();
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);
      let output = '';

      customers.forEach(function (costumer){
        output += `
          <ul>
            <li>ID: ${costumer.id}</li>
            <li>ID: ${costumer.name}</li>
            <li>ID: ${costumer.company}</li>
            <li>ID: ${costumer.phone}</li>
          </ul>
        `;
      });



      document.getElementById('customers').innerHTML = output;
    }
  }

  xhr.send();
}
