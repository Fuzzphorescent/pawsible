function validateForm(event) {
    event.preventDefault();
  
    const animalType = document.getElementById('input_select').value;
    const breed = document.getElementById('input-breed').value;
    const size = document.getElementById('input-size').value;
    const marking = document.getElementById('input-marking').value;
    const features = document.getElementById('input-features').value;
    const location = document.getElementById('input-location').value;
    const address = document.getElementById('input-address').value;
    const fullName = document.getElementById('input-name').value;
    const email = document.getElementById('input-email').value;
    const phoneNumber = document.getElementById('input-number').value;
    const image = document.getElementById('customFile').value;
  
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  
    if (animalType === '') {
      alert('Please select the type of animal.');
      return;
    }

    if (breed === '') {
      alert('Please enter the breed of the animal.');
      return;
    }
  
    if (isNaN(size) || size <= 0) {
      alert('Please enter a valid size/approximate weight.');
      return;
    }
  
    if (marking === '') {
      alert('Please enter the color/markings of the animal.');
      return;
    }
  
    if (features === '') {
      alert('Please provide distinctive features and characteristics of the animal.');
      return;
    }
  
    if (location === '') {
      alert('Please enter the location where the animal was spotted.');
      return;
    }
  
    if (address === '') {
      alert('Please enter specific location details.');
      return;
    }
  
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
  
    if (image === '') {
      alert('Please upload an image of the pet.');
      return;
    }
  
    document.getElementById('myForm').submit();
  }
  
  
  document.getElementById('myForm').addEventListener('submit', validateForm);
  