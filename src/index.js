import './assets/css/style.css';
import GeraCPF from './modules/geradorCPF';

function clicabotao(){//When the user clicks the button, it's gonna write on HTML
    const gerar = new GeraCPF
    const cpfgerado = document.querySelector('.cpf')
    cpfgerado.innerHTML = gerar.geraNovoCPF()
}
//Catching the button
const botao = document.getElementById('botaoGerador')
//Adding listener
botao.addEventListener('click', clicabotao)