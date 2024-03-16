const postList = document.querySelector('#bPosts');


let posts = []

function darkMode(){
    let element = document.body;
    element.classList.toggle('darkMode')
}


function renderPosts() {
    postList.textcontent = '';
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
    
        const li = document.createElement('li');
        li.textContent = post;
        // li.setAttribute('blogPost-index', i)

        const h3 = document.createElement('h3');
        h3.textcontent = post.content;

        const p = document.createElement('p');
        p.textContent = post.content;

        const h4 = document.createElement('h4')
        h4.textcontent = post.content;

        postList.append(li);
        // postList.li.append(h3);
        // postList.li.append(p);
        // postList.li.append(h4);
        li.append(h3)
        li.append(p)
        li.append(h4)
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
// console.log[posts]
init()
