const API_URL = 'http://localhost:666'
    function atualizarLista() {      
        tabela_lista.innerHTML ='',
        fetch(API_URL+'telefones')
        .then(function(resposta){
            return resposta.json();
        })
    }