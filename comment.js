document.getElementById('comment-btn').addEventListener('click',function(){
    const textArea = document.getElementById('text-area');
    const innerText =textArea.value;


    const addComment =document.getElementById('add-comment');
    const p =document.createElement('p');
    p.innerText=innerText;
    addComment.appendChild(p);

    // clear comment
    textArea.value='';
})