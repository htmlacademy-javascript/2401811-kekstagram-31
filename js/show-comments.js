const COMMENTS_COUNT = 5;

let comments = [];
let commentsCounter = 0;

const fullPicture = document.querySelector('.big-picture');
const fullPictureComments = fullPicture.querySelector('.social__comments');
const fullPictureCommentsLoader = fullPicture.querySelector('.comments-loader');
const fullPictureShownComments = fullPicture.querySelector('.social__comment-shown-count');
const fullPictureTotalComments = fullPicture.querySelector('.social__comment-total-count');

const renderComment = (data, index) => {
  const renderedComment = document.createElement('li');
  renderedComment.classList.add('social__comment');
  renderedComment.innerHTML = `<img class="social__picture" src="${data[index].avatar}" alt="${data[index].name}" width="35" height="35"> <p class="social__text">${data[index].message}</p>`;
  return renderedComment;
};

const showNextComments = () => {
  const commentsContainer = document.createDocumentFragment();

  for (let i = 0; i < Math.min(comments.length, COMMENTS_COUNT); i++) {
    commentsContainer.append(renderComment(comments, i));
    commentsCounter++;
  }
  fullPictureComments.append(commentsContainer);
  if (comments.length <= COMMENTS_COUNT) {
    fullPictureCommentsLoader.classList.add('hidden');
    fullPictureCommentsLoader.removeEventListener('click', showNextComments);
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
  showNextComments();
  fullPictureCommentsLoader.addEventListener('click', showNextComments);
};

export { renderComments };
