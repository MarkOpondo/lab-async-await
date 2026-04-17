// Write your code here!
async function fetchAndDisplayPosts() {
    try{
        const response = await fetch(' https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        displayPosts(posts)

        console.log(posts);
    }catch{
        const postsContainer = document.querySelector('#post-list')
        const errorMessage = document.createElement('li')

        errorMessage.textContent = 'Cannot get posts at this time. Please try again later'

        postsContainer.appendChild(errorMessage)
        
        console.log('Cannot get posts at this time', error);
    }

}

const displayPosts = (posts) => {
    const postsContainer = document.querySelector('#post-list')

    posts.forEach(post => {
        const postItem = document.createElement('li')
        const postTitle = document.createElement('h1')
        const postContent = document.createElement('p')

        postTitle.textContent = `${post.title}`
        postContent.textContent = `${post.body}`

        postItem.append(postTitle, postContent)
        postsContainer.appendChild(postItem)
    });
}

fetchAndDisplayPosts()