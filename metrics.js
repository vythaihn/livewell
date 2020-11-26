let r, g, b;
let authPromise;
let database;
let rgbDiv;

let bodyElement;
let buttons = [];
let ready = false;
let dataSave;

function pickColor() {
  r = 256
  g = 256
  b = 256
  background(r, g, b);
  updateBodyBG();
}

function setup() {

  title = createDiv().parent('#root');
  bodyElement = document.body;

  pickColor();
  ready = true;
  //title.html("Click on the section that you would like to make changes:");

  buttons.push(createButton('Save').parent('#root').class('green-ish'));
  buttons.push(createButton('Back').parent('#root').class('red-ish'));
  //buttons.push(createButton('Product').parent('#root').class('blue-ish'));
  //buttons.push(createButton('something').parent('#root').class('orange-ish'));

  
  buttons[0].mouseClicked(saveFunction);
  buttons[1].mouseClicked(back);


}
// Metrics
async function saveFunction() {
  console.log(document.getElementById("district-input").value)
}

async function back() {
  var link = "index.html"
  window.location.href = link; 
}

function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
}
