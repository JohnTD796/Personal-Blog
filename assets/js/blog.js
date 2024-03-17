const postList = document.querySelector('#bPosts');
const backButton = document.querySelector('#back-button')

let posts = []

function darkMode(){
    let element = document.body;
    element.classList.toggle('darkMode')
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
});

function renderPosts() {
    postList.textcontent = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
    
        const li = document.createElement('li');
        li.textContent = post[i];

        const h3 = document.createElement('h3');
        h3.innerText = post.title;

        const p = document.createElement('p');
        p.textContent = post.content;

        const h4 = document.createElement('h4')
        h4.innerText = post.username;

        postList.append(li);
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(h4)
        console.log(post)
    }
    console.log(posts)
    
}


function init() {
    const storedPosts = JSON.parse(localStorage.getItem('postsArray'));

    if (storedPosts !== null) {
        posts = storedPosts;
    }
    renderPosts();
    console.log(storedPosts)   
}


function storePosts() {
    localStorage.setItem('posts', JSON.stringify(postsArray))
    
}
init()
