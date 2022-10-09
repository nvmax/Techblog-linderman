// need function to create post with event handler and replace document location

async function createPostHandler(event) {
    event.preventDefault();

    document.location.replace('/dashboard/new')
}
document.querySelector('#create-new-post').addEventListener('click', createPostHandler);