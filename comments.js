document.addEventListener("DOMContentLoaded", function () {    
    fetchAndDisplayComments();
  });


  
  function fetchAndDisplayComments() {
    const commentContainer = document.getElementById('comments-container');
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('postId');

    if (postId) {

      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(datas => {
          datas.forEach(comment => {
            createCommentElement(comment,commentContainer);
          });
        })
        .catch(error => console.error('Error fetching comments:', error));
    } else {
      console.error('postId not found in the URL');
    }
  }
  
  
  function createCommentElement(comment,commentContainer) {
    const individualComment = document.createElement('div');
    individualComment.className = 'comment-container';

    const currentDate = new Date().toLocaleDateString();

    individualComment.innerHTML = `
      <h4>
      <span style="color: black;">Posted By: </span>
      <span style="color:#2587be;">${comment.email}</span>
      </h4>
      <h5 style="color: black;">Posted at: ${currentDate}</h5>
      <p>${comment.body}</p><br>
      <button id="delete-btn"
       onclick="deleteComment(this)">Delete</button>`;
    

    commentContainer.appendChild(individualComment);
  }

  function addNewComment(){
    const userEmail = document.getElementById('user-email').value;
    const commentDescription = document.getElementById('comment-description').value;
    if(userEmail && commentDescription) {
      const newComment = {
        email : userEmail,
        body : commentDescription,
      };
  
      const commentContainer = document.getElementById("comments-container")
      createCommentElement(newComment, commentContainer);

      document.getElementById('user-email').value = "";
      document.getElementById('comment-description').value = "";
    } else {
      alert("Please enter both mail and description");
    }
  }

  function deleteComment(button){
    const commentContainer = document.getElementById('comments-container');
    const commentElement = button.parentElement;
    commentContainer.removeChild(commentElement);
  }

  
