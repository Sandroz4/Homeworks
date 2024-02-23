document.getElementById('propertyForm').addEventListener('submit', function(event) {
event.preventDefault();


const propertyInput = document.getElementById('propertyInput').value.trim();

const customerObject = {
  name: 'Sandro Zabakhidze',
  age: 16,
  email: 'sandro@gmail.com',
  address: 'gldani 3'
  };
  
  if (propertyInput in customerObject) {
    console.log(`Value of '${propertyInput}':`, customerObject[propertyInput]);
  } else {
    console.log(`'${propertyInput}' not found.`);
}
});
  
