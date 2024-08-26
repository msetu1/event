// remo0ve child 
// 
document.getElementById('list-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

// add item 
document.getElementById('add-item').addEventListener('click',function(){
    const listContainer =document.getElementById('list-container');
    const li =document.createElement('li');
    li.innerText='this is a delegate';
    li.classList.add('item');
    listContainer.appendChild(li);
})