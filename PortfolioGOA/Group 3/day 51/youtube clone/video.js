var subscribeButton = document.getElementById("sub-button-yt");
subscribeButton.addEventListener("click", updateSubscriberCount);


function updateSubscriberCount() {
    var subCountElement = document.getElementById("sub-count");
    var currentCount = parseInt(subCountElement.innerText);
    var newCount;

    if (subscribeButton.dataset.subscribed === "true") {

        newCount = currentCount - 1;
    } else {
        newCount = currentCount + 1;
    }
    subCountElement.innerText = newCount + "k subscribers";
    subscribeButton.dataset.subscribed = (subscribeButton.dataset.subscribed === "true") ? "false" : "true";
}


var likeButton = document.getElementById("like-button");
likeButton.addEventListener("click", updateLikeCount);


function updateLikeCount() {
    var likeCountElement = document.getElementById("like-count");
    var currentCount = parseInt(likeCountElement.innerText);

    var newCount;
    if (likeButton.dataset.liked === "true") {
        newCount = currentCount - 1;
    } else {
        newCount = currentCount + 1;
    }
    likeCountElement.innerText = newCount + "k";
    likeButton.dataset.liked = (likeButton.dataset.liked === "true") ? "false" : "true";
}


function updateSubscriberCount() {
    var subCountElement = document.getElementById("sub-count");
    var currentCount = parseInt(subCountElement.innerText);
    var newCount;

    if (subscribeButton.dataset.subscribed === "true") {
        newCount = currentCount - 1;
    } else {
        newCount = currentCount + 1;
    }
    subCountElement.innerText = newCount + "k subscribers";
    subscribeButton.dataset.subscribed = (subscribeButton.dataset.subscribed === "true") ? "false" : "true";
    subscribeButton.innerText = (subscribeButton.dataset.subscribed === "true") ? "Subscribed" : "Subscribe";
}
// ... (your existing JavaScript code) ...

// Add an event listener to the Add Comment button
var addCommentBtn = document.getElementById("add-comment-btn");
addCommentBtn.addEventListener("click", addComment);

function addComment() {
    var commentText = document.getElementById("comment-text").value;
    if (commentText.trim() !== "") {
        var commentContainer = document.getElementById("comment-container");

        // Create a new comment element
        var commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        // Create a user avatar
        var avatarElement = document.createElement("img");
        avatarElement.src = "images/yochico.png"; // Replace with the actual path to user avatars
        avatarElement.alt = "User Avatar";

        // Create a div for comment content
        var commentContentElement = document.createElement("div");
        commentContentElement.classList.add("comment-content");

        // Create a paragraph for the comment text
        var commentParagraph = document.createElement("p");
        commentParagraph.innerText = commentText;

        // Append the paragraph to the comment content div
        commentContentElement.appendChild(commentParagraph);

        // Append the user avatar and comment content to the comment element
        commentElement.appendChild(avatarElement);
        commentElement.appendChild(commentContentElement);

        // Append the comment element to the comment container
        commentContainer.appendChild(commentElement);

        // Clear the input field
        document.getElementById("comment-text").value = "";
    }
}

// ... (your existing JavaScript code) ...
