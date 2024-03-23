
const themeBtn = document.getElementById('theme');


themeBtn.addEventListener('click', function(event) {
    if (document.querySelector('body').getAttribute('id') === 'dark'){
       document.querySelector('body').removeAttribute('id', 'dark')
       document.getElementById('moon').id = 'sun';
       document.getElementById('theme').innerHTML = 'light_mode'
   }
       else {
        let divs = document.querySelectorAll('div');
           document.querySelector('body').setAttribute('id', 'dark')
           for (let i = 0; i < array.length; i++) {
                divs[i].setAttribute('id', 'darkDiv');
           }
           
           document.getElementById('theme').innerHTML = 'dark_mode'
   }
   });