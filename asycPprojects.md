//generate random color
//6 unlimited colors

const randomColor=function(){
  const hex="0123456789ABCDEF";
  let color="#";

  for(let i=0; i<6; i++){
    color+=hex[Math.floor(Math.random()*16)];
  }

  return color;
}

// console.log(randomColor());
let intervalId;

const startChangingColor = function(){
  if(!intervalId)
  intervalId=setInterval(changeBgColor,1000);

  function changeBgColor(){ 
    document.body.style.backgroundColor=randomColor();
  }
};
const stopChangingColor=function(){
  if(intervalId){
    clearInterval(intervalId);
    intervalId=null;
  }
};

document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

// projects 5 keyboard


const insert=document.getElementById('insert');

window.addEventListener('keydown', (e)=>{
  insert.innerHTML=`
  <div class='color>
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'space' : e.key}</td>
        <td>${e.keycode}</td>
        <td>${e.Code}</td>
      </tr>
    </table>    
  </div>
  `;
});