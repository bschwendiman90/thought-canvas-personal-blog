{/* <span class="material-symbols-outlined">
            dark_mode
        </span> */}

const themeBtn = document.getElementById('theme');
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const submitEl = document.getElementById('submit');


submitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let usernameValue = usernameEl.value.trim();
    let titleValue = titleEl.value.trim();
    let contentValue = contentEl.value.trim();

    if (usernameEl.value === '' || titleEl.value === '' || contentEl.value === ''){
        window.alert('Please fill out all fields')
    } else {

        let existingData = localStorage.getItem('blogPosts');
        let blogPosts = existingData ? JSON.parse(existingData) : [];
         
        blogPosts.push({
        username: usernameValue,
        title: titleValue,
        content: contentValue
        });
    
        console.log(blogPosts)
    
    
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
        window.location.href = './blog.html'
    };
    
    usernameEl.value = '';
    titleEl.value = '';
    contentEl.value = '';

});

themeBtn.addEventListener('click', function(event) {
 if (document.querySelector('body').getAttribute('id') === 'dark'){
    document.querySelector('body').removeAttribute('id', 'dark')
    document.getElementById('moon').id = 'sun';
    document.getElementById('theme').innerHTML = 'light_mode'
}
    else {
        document.querySelector('body').setAttribute('id', 'dark')
        document.getElementById('sun').id = 'moon';
        document.getElementById('theme').innerHTML = 'dark_mode'
}
});
