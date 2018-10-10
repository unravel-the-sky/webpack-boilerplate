import Renderer from './renderer';


const render = new Renderer();
const value = render.render();

const element = document.getElementById('title');
element.innerText = value;