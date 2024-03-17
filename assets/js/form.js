const usernameInput = document.getElementById('uName');
const titleInput = document.getElementById('uTitle');
const contentInput = document.getElementById('uContent');
const submitButton = document.getElementById('sButton')

let postsArray = []


function darkMode() {
    let element = document.body;;
    element.classList.toggle('darkMode');
}
// selects everything in the body of the document and 
// enables/disables the 'darkmode' class in the css files on button press.

function init() {
    const storedPosts = JSON.parse(localStorage.getItem('postsArray'));
    if (storedPosts !== null) {
        postsArray = storedPosts;
    }   
}

function storePosts() {
    localStorage.setItem('postsArray', JSON.stringify(postsArray))
}

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const blogPost = {
        username: usernameInput.value.trim(),
        title: titleInput.value.trim(),
        content: contentInput.value.trim(),
    };

    console.log(blogPost)
    if (usernameInput.value === '' ||
        titleInput.value === '' ||
        contentInput.value === ''){
        return false;
    } 
    else{
        postsArray.push(blogPost)
        console.log(postsArray)
        usernameInput.value = '';
        titleInput.value = '';
        contentInput.value = '';
    }
    
    storePosts();
});
init()


