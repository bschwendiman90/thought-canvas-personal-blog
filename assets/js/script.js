{/* <span class="material-symbols-outlined">
            dark_mode
        </span> */}

const themeBtn = document.getElementById('theme');
const usernameEl = document.getElementById('username');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content')
const submitEl = document.getElementById('submit')


submitEl.addEventListener('click', function (event) {
    event.preventDefault();

    let blogPost = {
    username: usernameEl.value,
    title: titleEl.value,
    content: contentEl.value
};


localStorage.setItem('blogPost', JSON.stringify(blogPost))
});
