import * as staticelements from './modules/Selectors.js';
import Navs from './modules/Navs.js';
import bookList from './modules/books.js';
import saveDataLocalStorage from './modules/storage.js';

class Book {
  constructor(container) {
    this.saveDataLocalStorage = saveDataLocalStorage;
    this.booksList = bookList;
    this.container = container;
  }

    generateBooks =() => {
      this.container.innerHTML = '';
      if (localStorage.getItem('books') != null) {
        this.booksList = JSON.parse(localStorage.getItem('books'));
        this.booksList.forEach((element, index) => {
          const li = document.createElement('li');
          li.className = 'elements';
          const titleDiv = document.createElement('div');
          titleDiv.className = 'book-title';
          titleDiv.textContent = `"${element.title}" by ${element.author}`;
          li.appendChild(titleDiv);
          const removebtn = document.createElement('button');
          removebtn.className = 'remove-button';
          removebtn.textContent = 'Remove';

          removebtn.addEventListener('click', () => {
            this.remove(index);
            this.generateBooks();
          });
          li.appendChild(removebtn);
          this.container.append(li);
          if (index % 2 !== 0) {
            li.classList.add('grey-background');
          }
        });
      }
    }

  saveDataLocalStorage;

  remove = (index) => {
    this.booksList = this.booksList.filter((book, ind) => ind !== index);
    this.saveDataLocalStorage(this.booksList);
  }

  addNewBook =() => {
    const title = staticelements.title.value;
    const author = staticelements.author.value;
    if (title === '' || author === '') {
      staticelements.errorlable.style.display = 'block';
    } else {
      const book = {
        title,
        author,
      };
      this.booksList.push(book);
      this.saveDataLocalStorage(this.booksList);
      this.generateBooks();
      this.showbooksection();
    }
  }

  showbooksection = () => {
    staticelements.container.style.display = 'flex';
    staticelements.bookaddsection.style.display = 'none';
    staticelements.contactussection.style.display = 'none';
  }
}

const book = new Book(document.getElementById('book-lis'));
const menu = new Navs();
const addBookbtn = document.querySelector('.Add');
addBookbtn.addEventListener('click', () => {
  book.addNewBook();
});

staticelements.listNav.addEventListener('click', () => {
  menu.showBooksList();
});
staticelements.addNewNav.addEventListener('click', () => {
  menu.showBooksAdd();
});
staticelements.contactNav.addEventListener('click', () => {
  menu.showContacts();
});
window.onload = book.generateBooks();

export default Book;