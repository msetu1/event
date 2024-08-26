const backColor=document.getElementById('click-me').addEventListener('click',function(){
    document.body.style.backgroundColor='red'
})

// change details 
document.getElementById('click-details').addEventListener('click',function(){
    const changeDetail=document.getElementById('details');
    changeDetail.innerText='Hi, This is Anupoma.';
})
// updated text
document.getElementById('click-update').addEventListener('click',function(){
    const changeDetail=document.getElementById('details');
    changeDetail.innerText='Ohh sorry, This is a Nowshin Akter.';
})
// add text 
document.getElementById('add-text').addEventListener('click',function(){
const mainSection =document.getElementById('main-section');
    // document.body.style.backgroundColor='green'
   const sections= document.createElement('section');
   sections.innerHTML=`
   <h2>Course List</h2>
   <ul>
   <li>Front end</li>
   <li>Back end</li>
   <li>Database</li>
   </ul>
   `
mainSection.appendChild(sections);
})


// update 
document.getElementById('update-btn').addEventListener('click',function(){
const inputField=document.getElementById('input-field');
const innerText =inputField.value;

const p=document.getElementById('input-text');
p.innerText=innerText;
inputField.value='';

})