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
                            <button onclick: "contato(${cadacontato.id})" class="btn btn-outline-warning" data-bs-toggle="offcanvas" data-bs-target="#offcanvasEditar">
                                Editar
                            </button>
                            <button onclick:"excluir(${cadacontato.id})" class="btn btn btn-outline-danger">
                                Excluir
                            </button>
                        </td>
                    </tr>`
            });
        })
    }
    function excluir(id) {
        let resposta = confirm('Você perderar os dados do item deletado, tem certeza que quer excluir?');
        if(resposta !== true){
            return;
        }
    
        fetch(API_URL+'/telefones/'+id,{
            method: 'DELETE',
        });
        atualizarLista();
    }
    
    function criar(){
        event.preventDefault();
        let contato = {
            nome : document.getElementById('input_nome').Value,
            numero : document.getElementById('input_telefone').Value,
            cidade : document.getElementById('input_cidade').Value,
        }
        if(contato.nome=="" && contato.telefone=="" && contato.cidade==""){
            alert('Dados invalidos');
            return;
        }
        fetch(API_URL+'/telefones',{
            method:'POST',
            body:JSON.stringify(contato)
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((resposta)=>resposta.json())
            .then((data)=> {
                atualizarLista();
                alert('Contato Atualizado')
                console.log('success:',data);
            })
            .catch((erro)=>{
                console.error('error:',erro);
            });
            formAdd.reset()
    }