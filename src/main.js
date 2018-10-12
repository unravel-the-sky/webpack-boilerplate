import Renderer from './renderer';
// var Renderer = require('./renderer');


const render = new Renderer();
const value = render.renderStuff();

const element = document.getElementById('title');
element.innerText = value;