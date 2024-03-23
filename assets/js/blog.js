
const themeBtn = document.getElementById('theme');
const homeBtn = document.getElementById('homeBtn')
// Retrieve the array of objects from local storage
let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));

// Check if the array exists and is not empty
if (blogPosts && blogPosts.length > 0) {
    // Iterate over the array
    blogPosts.forEach(function(object) {
        // Create a new div element for each object
        let newDiv = document.createElement('div');
        
        // Set the content of the new div using the object properties
        newDiv.innerHTML = `<p>Username: ${object.username}</p><p>Title: ${object.title}</p><p>Content: ${object.content}</p>`;
        
        // Append the new div to the body of the page
        document.body.appendChild(newDiv);
    });
};
console.log(blogPosts)

homeBtn.addEventListener('click', function () {
    window.location.href = './index.html'
})

themeBtn.addEventListener('click', function() {
    if (document.querySelector('body').getAttribute('id') === 'dark'){
        document.querySelector('body').removeAttribute('id', 'dark')
        document.getElementById('theme').innerHTML = 'light_mode'
        let divs = document.querySelectorAll('div');
        for (let i = 0; i < divs.length; i++) {
             divs[i].removeAttribute('id', 'darkDiv');
           }
   } else {
        document.querySelector('body').setAttribute('id', 'dark')
        document.getElementById('theme').innerHTML = 'dark_mode'
        let divs = document.querySelectorAll('div');
        for (let i = 0; i < divs.length; i++) {
            divs[i].setAttribute('id', 'darkDiv');
           }
   }
   });