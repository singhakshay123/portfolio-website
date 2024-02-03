let valueDisplays = document.querySelectorAll(".num");
let interval = 8000;
valueDisplays.forEach((valueDisplay) =>{
    let startValue =0;
    let endvalue = parseInt(valueDisplay.getAttribute
    ("data-val"));
    let duration = Math.floor(interval/endvalue);
    let counter = setInterval(function() {
        startValue +=1;
        valueDisplay.textContent = startValue;
 if(startValue == endvalue){
    clearInterval(counter);
 }
},duration);
});

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzsxsEIJy6mBiqhyqG6hvl0KwVi_LEgjL4qu7nxWCs9abt6kCkUA7KIz9nwhtbD6ZTr/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
