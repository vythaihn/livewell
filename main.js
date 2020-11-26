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

  buttons.push(createButton('Metrics').parent('#root').class('red-ish'));
  buttons.push(createButton('Our Team').parent('#root').class('green-ish'));
  buttons.push(createButton('Product').parent('#root').class('blue-ish'));
  buttons.push(createButton('...').parent('#root').class('orange-ish'));


  
  buttons[0].mouseClicked(metrics);
  buttons[1].mouseClicked(our_team);
  buttons[2].mouseClicked(products);
  buttons[3].mouseClicked(metrics);

}
// Metrics
async function metrics() {
  var link = "metrics.html"
  window.location.href = link; 
}

async function our_team() {
  var link = "our_team.html"
  window.location.href = link; 
}

async function products() {
  var link = "products.html"
  window.location.href = link; 
}

async function hello() {
  var link = "clean.html"
  window.location.href = link; 
}


function updateBodyBG(){
  bodyElement.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1.0)`;
}
