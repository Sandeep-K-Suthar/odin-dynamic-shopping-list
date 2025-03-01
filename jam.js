const selectInput = document.querySelector('input');


const selectClassList = document.querySelector(".list");
const createUnorderedList = document.createElement('ul');
selectClassList.appendChild(createUnorderedList);


const selectAddButton = document.querySelector('.addBt');

function addItem() {
  const createListElement = document.createElement('li');
  const listValues = selectInput.value.trim();

  if (!listValues) return;

  createListElement.innerText=listValues;
  createUnorderedList.appendChild(createListElement);

  const createDeleteButton = document.createElement('button');
  createDeleteButton.style.marginLeft='1em';
  createDeleteButton.innerText='Delete Me.';
  createListElement.insertBefore(createDeleteButton,createListElement.nextSibling);

  createDeleteButton.addEventListener('click',() => createListElement.remove());
  selectInput.value='';
  selectInput.focus();
}

selectAddButton.addEventListener('click', addItem);

selectInput.addEventListener('keypress',(e)=>{
  if (e.key ==='Enter'){
    addItem();
  }
});