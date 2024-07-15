// Projects 1

const buttons = document.querySelectorAll('.button');
  // console.log(buttons);

  const body = document.querySelector("body");

  buttons.forEach(function(button) {
    console.log(button);
    button.addEventListener('click', function(e) {
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey'){
        body.style.backgroundColor=e.target.id;
      }
      else if(e.target.id === 'white'){
        body.style.backgroundColor=e.target.id
      }
      else if(e.target.id === 'blue'){
        body.style.backgroundColor=e.target.id
      }
      else{
        body.style.backgroundColor=e.target.id
      }
    });
  });

//   Project2

const form=document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  console.log(height);
  const weight = parseInt(document.querySelector('#weight').value);
  console.log(weight);

  const results=document.querySelector('#results');

  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML="Please enter the valid height";
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML="Please enter the valid wight";
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    // function
    function predict(bmi){
      if(bmi<18.6){
        return "Under Weight";
      }
      else if(bmi>18.6 && bmi<24.9){
        return "Normal Range";
      }
      else{
        return "OverWeight";
      }
    }
    
    results.innerHTML=`<span>${bmi} and ${predict(bmi)} </span>`;
  }

});