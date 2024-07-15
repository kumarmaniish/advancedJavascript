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