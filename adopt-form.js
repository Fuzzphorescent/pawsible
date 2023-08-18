document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const fullName = document.getElementById('input-name').value;
      const email = document.getElementById('input-email').value;
      const phoneNumber = document.getElementById('input-number').value;
  
      const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
      if (fullName === '') {
        alert('Please enter your full name.');
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (isNaN(phoneNumber) || phoneNumber.length !== 10) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      form.submit();
    });
  });
  