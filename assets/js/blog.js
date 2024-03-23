
const themeBtn = document.getElementById('theme');
const homeBtn = document.getElementById('homeBtn')

let blogPosts = JSON.parse(localStorage.getItem('blogPosts'));


if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach(function(object) {
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<p>Username: ${object.username}</p><p>Title: ${object.title}</p><p>Content: ${object.content}</p>`;
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