function filtrar(){
    let expressao = input_busca.value.toLowerCase(); //valor que o usuario digitou
    let linhas = tabela_telefones.getElementsByTagName('tr'); // pegando todas as linhas (<tr>) da tabela.

    for(let posicao in linhas){
        if(isNaN(posicao)){
            continue;
        }
        
        let colunanome=linhas[posicao].children[2].innerText.toLowerCase()
        let colunanumero=linhas[posicao].children[3].innerText.toLowerCase()
        let colunacidade=linhas[posicao].children[4].innerText.toLowerCase()
        let colunas = colunanome + colunanumero + colunacidade;
        //let linha = linhas[posicao].innerText.toLowerCase()  essa variavel vai substituir essa toda expresao e ficar só linhas
        
        if(colunas.includes(expressao)){
            linhas[posicao].style.display ='';
        }else{
            linhas[posicao].style.display ='none';
        }
         // se dentro da linha atual da tr existir a expresao digitada pelo usuario mostrar a linha se não esconder
    }
}
