
function contar(){
    let inicio = document.getElementById('Inicio');
    let fim = document.getElementById('Fim');
    let passo = document.getElementById('Passo');
    let clicarBotao = document.getElementById('botao');
    let pre = document.getElementById('pre');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        pre.innerHTML = 'Impossível contar!';

    } else {
        pre.innerHTML = 'Contando: <br>'
        // declarar váriaveis para o loop
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        
        if(p <= 0) {
            alert('Passo Inválido! Considerando passo 1.')
            p = 1
        }

        if (i < f ){
            // contagem progressiva
            for (let c = i; c <= f ; c += p){
                pre.innerHTML += ` ${c}`;
            }
    
        } else {
            // contagem regressiva
            for (let c = i ; c >= f ; c -= p){
                pre.innerHTML += ` ${c} \u{1F449}` ;
            }
            
        }
        pre.innerHTML += `\u{1F3C1}`;
    }

}