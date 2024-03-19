const postList = document.querySelector('#bPosts');
const backButton = document.querySelector('#back-button')

let posts = []

function darkMode(){
    let element = document.body;
    element.classList.toggle('darkMode')
}
// sets new element 'element' to the entire document body effectively grabbing all text and background colors that are in the body of the webpage.
//  line 8: grabs 'element' and toggles 'darkMode' css on or off when the 'toggle dark mode' button is pressed.

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
    }
}

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('postsArray'));

    if (storedPosts !== null) {
        posts = storedPosts;
    }
    renderPosts();  
}

function storePosts() {
    localStorage.setItem('posts', JSON.stringify(postsArray))
    
}
init()
