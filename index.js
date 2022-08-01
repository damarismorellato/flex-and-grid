/* Deixando o menu lateral ativo e inativo */

const botaoMenu = document.querySelector('.cabecalho__menu');
const menuLateral = document.querySelector('.menu__lateral');

botaoMenu.addEventListener( 'click', () => {
    menuLateral.classList.toggle('menu__lateral--ativo')
})