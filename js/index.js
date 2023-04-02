// 1º passo: Obter o elemento no qual eu desejo adicionar o evento.
const botaoAumentar = document.querySelector('#contador .botoes button.aumentar');

// Obtendo a tag <span>
const span = document.querySelector('#contador span') 
console.log(span);

// 2º passo: Adicionar o evento no elemento que obtivemos
// O addEventListener() é um método para adicionar um "escutador" de evento no elemento.
// Para o método addEventListener(), passamos 2 parâmentros: tipo do evento e função de callback (o que vai acontecer quando o evento disparar?)
botaoAumentar.addEventListener('click', () => {
    // Eu quero colocar o número 1 dentro da tag span

    const valorAtual = Number(span.textContent);
    const valorAtualizado = valorAtual + 1;

    span.textContent = valorAtualizado;
});
// click é o tipo de evento, portanto, o tipo de evento é um string.

console.log(botaoAumentar);