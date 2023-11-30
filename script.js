fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(datas => {
    // console.log(datas)
    const postsContainer = document.getElementById('posts-container');


    // iterating through the fetched post

    datas.forEach(post => {
        // created individual container for each post
        const individualContainer = document.createElement('div');
        individualContainer.className = 'post-container';

        individualContainer.innerHTML = `
        <p>ID: ${post.id}</p>
        <h3 class = "title-el"> ${post.title}</h3>
        <p> ${post.body}</p>
        <a href="comments.html?postId=${post.id}"  class="comment-btn">View Comments</a>`;

        // appending individualContainer to main container

        postsContainer.appendChild(individualContainer);

    });
})

.catch(err => console.log('Error fetching data:', error));