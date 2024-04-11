const COMMENTS_COUNT = 5;

let comments = [];
let commentsCounter = 0;
const fullPicture = document.querySelector('.big-picture');
const fullPictureComments = fullPicture.querySelector('.social__comments');
const fullPictureCommentsLoader = fullPicture.querySelector('.comments-loader');
const fullPictureShownComments = fullPicture.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = fullPicture.querySelector('.social__comment-total-count');

const renderComment = (data) => {
  const renderedComment = document.createElement('li');
  const renderedCommentTemplate = `<img class="social__picture" src="${data.avatar}" alt="${data.name}" width="35" height="35"> <p class="social__text">${data.message}</p>`;
  renderedComment.classList.add('social__comment');
  renderedComment.innerHTML = renderedCommentTemplate;
  return renderedComment;
};

const nextCommentsHandler = () => {
  const commentsContainer = document.createDocumentFragment();

  for (let i = 0; i < Math.min(comments.length, COMMENTS_COUNT); i++) {
    commentsContainer.append(renderComment(comments[i]));
    commentsCounter++;
  }
  fullPictureComments.append(commentsContainer);
  if (comments.length <= COMMENTS_COUNT) {
    fullPictureCommentsLoader.classList.add('hidden');
    fullPictureCommentsLoader.removeEventListener('click', nextCommentsHandler);
  } else {
    comments = comments.slice(COMMENTS_COUNT);
    fullPictureCommentsLoader.classList.remove('hidden');
  }
  fullPictureShownComments.textContent = commentsCounter.toString();
};

const renderComments = (photo) => {
  fullPictureComments.innerHTML = '';
  commentsCounter = 0;
  fullPictureTotalComments.textContent = photo.comments.length.toString();
  comments = photo.comments;
  nextCommentsHandler();
  fullPictureCommentsLoader.addEventListener('click', nextCommentsHandler);
};

export { renderComments };
