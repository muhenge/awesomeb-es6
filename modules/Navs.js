import * as selectors from './Selectors.js';

class Navs {
    showBooksList = () => {
      selectors.listBox.style.display = 'flex';
      selectors.contactBox.style.display = 'none';
      selectors.addBox.style.display = 'none';
      selectors.listNav.style.color = 'rgb(59, 59, 219)';
      selectors.addNewNav.style.color = 'black';
      selectors.contactNav.style.color = 'black';
    }

    showBooksAdd= () => {
      selectors.listBox.style.display = 'none';
      selectors.contactBox.style.display = 'none';
      selectors.addBox.style.display = 'flex';
      selectors.title.value = '';
      selectors.author.value = '';
      selectors.addNewNav.style.color = 'rgb(59, 59, 219)';
      selectors.listNav.style.color = 'black';
      selectors.contactNav.style.color = 'black';
    }

    showContacts= () => {
      selectors.listBox.style.display = 'none';
      selectors.contactBox.style.display = 'flex';
      selectors.addBox.style.display = 'none';
      selectors.contactNav.style.color = 'rgb(59, 59, 219)';
      selectors.listNav.style.color = 'black';
      selectors.addNewNav.style.color = 'black';
    }
}

export default Navs;