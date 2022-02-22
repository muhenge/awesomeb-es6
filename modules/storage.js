const saveDataLocalStorage = (booksList) => {
  localStorage.setItem('books', JSON.stringify(booksList));
};

export default saveDataLocalStorage;