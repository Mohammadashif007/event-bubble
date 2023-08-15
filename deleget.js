// const items = document.getElementsByClassName('items');
// for(const item of items){
//     item.addEventListener('click', (event) => {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('list-container').addEventListener('click', (event)=> {
   event.target.parentNode.removeChild(event.target);
})

document.getElementById('add-item').addEventListener('click', () => {
    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    li.classList.add('items');
    li.innerText = 'New items added';
    listContainer.appendChild(li);
})