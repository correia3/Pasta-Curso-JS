
function contar(){
    var inicio = document.getElementById('Inicio').value;
    var fim = document.getElementById('Fim').value;
    var passo = document.getElementById('Passo').value;
    
    let clicarBotao = document.getElementById('botao');
    let paragrafo = document.getElementById('paragrafo');

    for (inicio; inicio <= fim ; passo){
        paragrafo.innerHTML = `<p id="paragrafo"> ${inicio}</p>`;
    }
}