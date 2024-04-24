$(document).ready(function () {
    $('.tabs').tabs();
  
    var records = [];
  
// Inicio do Adicionar
    $("#btn-add").click(function () {
      var nome = $("#addNome").val();
      var telefone = $("#addTelefone").val();
  
      if (!checarTelefone(telefone)) {
        $("#addTelefone").addClass("red");
        return;
      }
  
      $("#addTelefone").removeClass("red");
  
      var id = records.length + 1; // Generate unique ID

      var record = {
          id: id,
          nome: nome,
          telefone: telefone
      };
  
      records.push(record);
  
      var newRow = `
      <tr>
          <td data-id="${id}">${id}</td> <td>${nome}</td>
          <td>${telefone}</td>
          <td id = EDITAR><a href="#"><i class="material-icons">edit</i></a></td>
          <td id = EXCLUIR><a href="#"><i class="material-icons">delete_forever</i></a></td>
      </tr>
  `;
  
      $("#lista").append(newRow);
  
      $("#addNome").val("");
      $("#addTelefone").val("");
  
      $('.collapsible').collapsible();
    });
// FIm do Adicionar
  
// Inicio Editar
$('#lista').on('click', '#EDITAR', function () {
    const row = $(this).closest('tr');
    const id = parseInt(row.find('td:first-child').text());
    const nome = row.find('td:nth-child(2)').text();
    const telefone = row.find('td:nth-child(3)').text();

    $('#upId').val(id);
    $('#upNome').val(nome);
    $('#upTelefone').val(telefone);

    $('.tabs').tabs('select', 'up');
});

//Atualizar - Milena
$("#btn-up").on("click", function (event) {
    event.preventDefault();
    var id = parseInt($('#upId').val());
    var nome = $('#upNome').val();
    var telefone = $('#upTelefone').val();
    
    $("td").filter(function() {
        var idCorresp = $(this).text() == id.toString();
        if (idCorresp){
            linha = $(this).parent()
            
            $(linha).find('td:nth-child(2)').text(nome)
            $(linha).find('td:nth-child(3)').text(telefone)
        }
    });

});
// Fim Editar

// Inicio Excluir
$('#lista').on('click', '#EXCLUIR', function () {
    var row = $(this).closest('tr');
    var id = row.data('id');

    records = records.filter(function(record) {
        return record.id !== id;
    });

    row.remove();
    atualizarIds();
});

function atualizarIds() {
    $('#lista tr.registro').each(function (index) {
        $(this).data('id', index + 1);
        $(this).find('td:first-child').text(index + 1);
    });
}
// Fim Excluir

// Procurar
$("#btn-show-all").click(function () {
    // Limpar todas as linhas da tabela
    $('#lista tbody').empty();

    // Adicionar cada registro à tabela
    for (var i = 0; i < records.length; i++) {
        var id = i + 1;
        var nome = records[i].nome;
        var telefone = records[i].telefone;

        var newRow = `
            <tr>
                <td data-id="${id}">${id}</td>
                <td>${nome}</td>
                <td>${telefone}</td>
                <td id="EDITAR"><a href="#"><i class="material-icons">edit</i></a></td>
                <td id="EXCLUIR"><a href="#"><i class="material-icons">delete_forever</i></a></td>
            </tr>
        `;

        $("#lista tbody").append(newRow);
    }

    $('#findNome').val('');
});

// Inicio Mostrar um registro
$("#btn-show-all").click(function () {

    $('#lista tbody').empty();

    for (var i = 0; i < records.length; i++) {
        var id = i + 1;
        var nome = records[i].nome;
        var telefone = records[i].telefone;

        var newRow = $('<tr>');
        newRow.append('<td data-id="' + id + '">' + id + '</td>');
        newRow.append('<td>' + nome + '</td>');
        newRow.append('<td>' + telefone + '</td>');
        newRow.append('<td id="EDITAR"><a href="#"><i class="material-icons">edit</i></a></td>');
        newRow.append('<td id="EXCLUIR"><a href="#"><i class="material-icons">delete_forever</i></a></td>');

        $('#lista tbody').append(newRow);
    }

    $('#findNome').val('');
});
// Fim Mostrar um registro


//Procurar - Milena
$("#btn-find").on("click", function (event) {
    event.preventDefault();

    $('#lista').hide()


    var nameSearch = $('#findNome').val();
    if (nameSearch.length === 1){
        return
    } 
    var trs = ''


    $("#lista").find('td').filter(function() {
        var idCorresp = $(this).text().toLowerCase().includes(nameSearch.toLowerCase());
        if (idCorresp){
            linha = $(this).parent()

            trs = trs + linha.html()
        }
    
    });

    var newlista = ` <tbody id="listaSearch">
        ${trs}
    </tbody>`

    parentList = $('#lista').parent()
    $('#listaSearch').remove()
    $(parentList).append(newlista)

})

//Mostrar Todos - Milena
$("#btn-show-all").on("click", function (event) {
    event.preventDefault();

    $('#listaSearch').remove()


    $('#lista').show()

})

});

