
# Relatório de Implementação - Lista Telefonica

 Aplicativo de lista telefônica utilizando JS, HTML, CSS e jQuery, esse projeto foi desenvolvido como p1 da matéria programação para dispositivos móveis na FATEC Lins


## Funcionalidades
Funcionalidade 1: Adicionar um registro - Esta funcionalidade foi implementada de maneira total.
Detalhamento da funcionalidade adicionar um registro:
Quando o botão com o id "btn-add" é clicado, o código executa as seguintes ações:
- Obtém o valor digitado no campo de entrada com o id "addNome" e o armazena na variável "nome".
- Obtém o valor digitado no campo de entrada com o id "addTelefone" e o armazena na variável "telefone".
- Verifica se o telefone inserido é válido usando a função "checarTelefone". Se não for válido, o campo de entrada de telefone recebe a classe "red" para destacar o erro, e a execução do código é interrompida.
- Remove a classe "red" do campo de entrada de telefone, caso tenha sido adicionada anteriormente.
- Calcula o novo ID incrementando o tamanho do array "records" em 1.
- Cria um novo registro com as informações de ID, nome e telefone e o armazena em uma estrutura de dados.
- Adiciona esse novo registro ao final do array "records".
- Cria uma nova linha HTML com os valores do novo registro e a armazena na variável "newRow".
- Adiciona a nova linha à tabela com o id "lista".
- Limpa os campos de entrada de nome e telefone. Ativa a funcionalidade "collapsible" para elementos com a classe "collapsible".
 
Funcionalidade 2: Atualizar um registro parte 1 - Esta funcionalidade foi implementada de maneira total.
Detalhamento da funcionalidade adicionar um registro:
Quando o ícone [EDITAR] é clicado, o código realiza as seguintes ações:
- Identifica a linha da tabela onde ocorreu o clique, utilizando o método `closest('tr')` para encontrar o elemento pai mais próximo do tipo `<tr>` (linha da tabela) em relação ao ícone clicado.
- Obtém o ID do registro da primeira célula (coluna) dessa linha, convertendo o texto contido nela para um número inteiro. Obtém o nome do registro da segunda célula (coluna) dessa linha. Obtém o telefone do registro da terceira célula (coluna) dessa linha.
- Insere o ID do registro nos campos de entrada correspondentes na aba de atualização.
- Insere o nome do registro nos campos de entrada correspondentes na aba de atualização.
- Insere o telefone do registro nos campos de entrada correspondentes na aba de atualização.
- Altera a aba ativa para a aba de atualização usando o método `tabs('select', 'up')`, que seleciona a aba com o identificador "up" dentro do elemento com a classe "tabs".
 
Funcionalidade 3: Atualizar um registro parte 2 - Esta funcionalidade foi implementada de maneira total.
Detalhamento da funcionalidade excluir um registro:
- $("#btn-up").on("click", function (event) { ... });: Este trecho está adicionando um evento de clique ao elemento HTML com o ID btn-up. Quando esse botão é clicado, a função definida dentro deste bloco de código será executada.
- event.preventDefault();: Isso previne o comportamento padrão do elemento HTML que causaria um recarregamento da página quando o botão é clicado. Ele garante que o clique no botão não tenha efeito de navegação.
- var id = parseInt($('#upId').val());: Aqui, o código está recuperando o valor do elemento HTML com o ID upId, convertendo-o para um número inteiro usando parseInt() e armazenando-o na variável id.
- var nome = $('#upNome').val();: Similar ao anterior, este código está obtendo o valor do elemento HTML com o ID upNome e armazenando-o na variável nome.
- var telefone = $('#upTelefone').val();: Novamente, esse trecho está obtendo o valor do elemento HTML com o ID upTelefone e armazenando-o na variável telefone.
- $("td").filter(function() { ... });: Aqui, o código está selecionando todos os elementos <td> (células de tabela) na página e filtrando-os usando uma função de filtro.
- var idCorresp = $(this).text() == id.toString();: Para cada célula da tabela, este trecho verifica se o texto dentro da célula é igual ao ID convertido para string.
- if (idCorresp){ ... }: Se uma correspondência for encontrada, o código dentro deste bloco será executado.
- linha = $(this).parent(): Aqui, o código está selecionando o elemento pai da célula atual (a linha da tabela) e armazenando-o na variável linha.
- $(linha).find('td:nth-child(2)').text(nome): Este trecho está encontrando a segunda célula (coluna) dentro da linha atual e definindo o seu texto como o valor da variável nome.
- $(linha).find('td:nth-child(3)').text(telefone): Similar ao anterior, este trecho está encontrando a terceira célula (coluna) dentro da linha atual e definindo o seu texto como o valor da variável telefone.
 

Funcionalidade 4: Excluir um registro - Esta funcionalidade foi implementada de maneira total.
Detalhamento da funcionalidade excluir um registro:
Ao clicar no ícone de excluir, o código executa as seguintes etapas:
- Identifica a linha da tabela onde o evento de clique ocorreu usando o método `closest('tr')`, que retorna o elemento pai mais próximo do tipo `<tr>` (linha da tabela) do ícone clicado.
- Obtém o ID do registro associado a essa linha utilizando o método `data('id')`, que recupera o valor do atributo de dados HTML "data-id" da linha, que armazena o ID do registro.
- Utiliza o método `filter()` para criar uma nova lista de registros excluindo o registro cujo ID corresponde ao ID obtido no passo anterior.
- Remove a linha da tabela correspondente ao registro excluído utilizando o método `remove()`.
- Chama a função `atualizarIds()` para atualizar os IDs dos registros restantes na tabela, garantindo que estejam em ordem sequencial, e atualiza o número exibido na primeira coluna de cada registro para refletir essa mudança.
 

Funcionalidade 5: Procurar um registro - Esta funcionalidade foi implementada de maneira total.
- $("#btn-find").on("click", function (event) { ... });: Define uma função para ser executada quando o botão com o ID btn-find é clicado.
- event.preventDefault();: Evita o comportamento padrão do botão, que geralmente seria enviar um formulário ou recarregar a página, garantindo que o clique não tenha esse efeito.
- $('#lista').hide(): Esconde o elemento HTML com o ID lista. Presumivelmente, este elemento representa uma lista ou tabela na página.
- var nameSearch = $('#findNome').val();: Obtém o valor do campo de entrada com o ID findNome, que provavelmente é utilizado para inserir o termo de busca.
- if (nameSearch.length === 1){ return }: Verifica se o comprimento do texto inserido no campo de busca é igual a 1. Se for, a função retorna, o que parece ser uma precaução contra buscas muito curtas.
- var trs = '': Inicializa uma variável trs que será usada para armazenar o HTML das linhas da tabela que correspondem à busca.
- $("#lista").find('td').filter(function() { ... });: Procura por células (<td>) dentro do elemento com o ID lista e filtra-as usando uma função.
- var idCorresp = $(this).text().toLowerCase().includes(nameSearch.toLowerCase());: Verifica se o texto dentro da célula, convertido para minúsculas, contém o termo de busca, também convertido para minúsculas.
- if (idCorresp){ ... }: Se uma correspondência for encontrada, o código dentro deste bloco será executado.
- linha = $(this).parent(): Obtém a linha (<tr>) à qual a célula atual pertence e a armazena na variável linha.
- trs = trs + linha.html(): Adiciona o HTML da linha correspondente à variável trs.
- var newlista = ...``: Constrói uma nova estrutura de tabela (presumivelmente HTML) com base nas linhas que correspondem à busca.
- parentList = $('#lista').parent(): Obtém o elemento pai do elemento com o ID lista.
- $('#listaSearch').remove(): Remove qualquer lista de busca anteriormente criada.
- $(parentList).append(newlista): Adiciona a nova lista de busca ao elemento pai do elemento com o ID lista.
 
Funcionalidade 6: Mostrar todos os registros - Esta funcionalidade foi implementada de maneira total.
- $("#btn-show-all").on("click", function (event) { ... });: Define uma função para ser executada quando o botão com o ID btn-show-all é clicado.
- event.preventDefault();: Evita o comportamento padrão do botão, que geralmente seria enviar um formulário ou recarregar a página, garantindo que o clique não tenha esse efeito.
- $('#listaSearch').remove(): Remove qualquer elemento com o ID listaSearch que possa estar presente na página. Isso provavelmente representa o resultado da busca anterior, limpando a área de busca.
- $('#lista').show(): Mostra o elemento com o ID lista. Presumivelmente, este elemento represe.
