import { cloneTemplate } from './util.js';

const MAIN_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const DATA_ERROR_TIMEOUT = 5000;

const getDataErrorHandler = () => {
  cloneTemplate('data-error');
  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, DATA_ERROR_TIMEOUT);
};

const getData = () => fetch(`${MAIN_URL}/data`)
  .then((response) => response.json())
  .catch(getDataErrorHandler);

const sendData = (body, onSuccess, onError) => fetch(`${MAIN_URL}/`, { method: 'POST', body: body })
  .then((response) => response.ok ? onSuccess() : onError())
  .catch(() => onError());

export { getData, sendData };
