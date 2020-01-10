let body = document.querySelector('#body');
let btn = document.querySelector('#btn');
/*let colors = ['gray', 'blue', 'red', 'purple', 'yellow', 'teal', 'green'];

//let li = document.querySelector('#li');
let color = document.querySelector('#color');

//body.style.background = 'blue';
btn.addEventListener('click', change_Color);

function change_Color(){
    //for(let i = 0; i < colors.length; i++){
       // if(colors[i] !== undefined){

    colors.forEach(function(item, number){
    let index = Math.floor(Math.random()*number);
    body.style.background = colors[index];
    color.innerHTML = colors[index];
        })
    }
    */

  let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];  

  let value = document.querySelector('#hex_Value');
  
  //btn.style.background = '#456782';
  btn.addEventListener('click', hexChange)

  function hexChange(){
      let hex = '#'
      for(let i = 0; i < 6; i++){
          let index = Math.floor(Math.random()*6);
          hex += hexValues[index];
      }
      body.style.background = hex;
      
      value.innerHTML = hex;

  }