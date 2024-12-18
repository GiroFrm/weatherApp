import './style.css';
import renderDom from './domRenderer.js';

document.querySelector('.test').addEventListener('click', ()=>{
    renderDom();
});



