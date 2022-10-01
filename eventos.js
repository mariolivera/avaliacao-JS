const API_URL = 'http://localhost:666'
    function atualizarLista() {      
        tabela_lista.innerHTML ='',
        fetch(API_URL+'telefones')
        .then((resposta)=>{
            return resposta.json();
        })
        .then((lista)=>{
            lista.forEach((cadacontato)=> {
                tabela_lista.innerHTML +=`
                    <tr>
                        <td>${cadacontato.id}</td>
                        <td>${cadacontato.nome}</td>
                        <td>${cadacontato.telefone}</td>
                        <td>${cadacontato.cidade}</td>
                        <td>
                            <button onclick = "contato(${cadacontato.id})" class="btn btn-outline-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar">
                                Editar
                            </button>
                            <button onclick="excluir(${cadacontato.id})" class="btn btn btn-outline-danger">
                                Excluir
                            </button>
                        </td>
                    </tr>`
            });
        })
    }