import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const user = {};
const LOCAL_STORAGE = 'user_date';
initPage();
const onInputForm = event => {
  const { name, value } = event.target;
  user[name] = value;
  localStorage.setItem(LOCAL_STORAGE, JSON.stringify(user));
  //
  const savedData = localStorage.getItem(LOCAL_STORAGE);
  if (savedData) {
    const parsedSavedData = JSON.parse(savedData);
    parsedSavedData[name] = value;
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(user));
    //
  }
};
function initPage() {
  try {
    const savedData = localStorage.getItem(LOCAL_STORAGE);
    const parsedSavedData = JSON.parse(savedData);
    if (parsedSavedData) {
      Object.entries(parsedSavedData).forEach(([name, value]) => {
        form[name].value = value;
      });
    }
  } catch (error) {
    console.log(error);
  }
}
form.addEventListener('input', throttle(onInputForm, 1000));
