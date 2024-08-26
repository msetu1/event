// disable 
document.getElementById('text-area').addEventListener('keyup',function(event){
    const text = event.target.value;
    const deleteText = document.getElementById('click-btn')
    if(text==='delete'){
        deleteText.removeAttribute('disabled')
    }
    else{
deleteText.setAttribute('disabled',true)
    }
})
// secret 
document.getElementById('click-btn').addEventListener('click', function(){
    const secret =document.getElementById('secret');
    secret.style.display = 'none';
})

// delete button 
document.getElementById('area').addEventListener('keyup',function(event){
    const text= event.target.value;

    const deleteBtn=document.getElementById('delete-btn');

    if(text==='delete'){
        deleteBtn.removeAttribute('disabled')
    }
    else{
        deleteBtn.setAttribute('disabled',true);
    }
})
document.getElementById('delete-btn').addEventListener('click', function(){
const text =document.getElementById('text');
text.style.display='none';
})