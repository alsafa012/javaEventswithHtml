console.log('hello world');

// option 02: add onclick function on the html element
// mostly useful
// <button onclick="makeRed()">click-red</button>

function makeRed(){
     document.body.style.backgroundColor='red';
}
// 003
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = blue;
function blue(){
  document.body.style.backgroundColor = 'blue';
}
// 03. another
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function purple(){
  document.body.style.backgroundColor = 'purple';
}
// option 4
const makePink = document.getElementById('make-pink')
makePink.addEventListener('click',pink)
function pink(){
     document.body.style.backgroundColor='pink';
}
// option 4 another way
const makeSkyblue = document.getElementById('make-sky')
makeSkyblue.addEventListener('click',function sky(){
     document.body.style.backgroundColor='skyblue';
})
// Final 04:
// its very important
document.getElementById('make-goldy').addEventListener('click',function(){
     document.body.style.backgroundColor = 'goldenrod';
})

