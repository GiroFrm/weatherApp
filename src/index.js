import './style.css';
import renderDom from './js/components/domRenderer.js';

document.querySelector('.test').addEventListener('click', ()=>{
    renderDom();
});



