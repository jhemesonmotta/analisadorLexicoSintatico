$(document).ready(function () {
  $(".erro").hide();
  $(".sucesso").hide();

  $("#ir").on('click', manageEntrada);

  $("#entrada").on('keypress', function (e) {
    if (e.which == 13) {//pressionou enter
      manageEntrada()
    }
  })


  function manageEntrada() {
    var entrada = $("#entrada").val();
    if (entrada) {
      console.log(analisador.verificaSentenca(entrada));
      var result = analisador.verificaSentenca(entrada);

      if (result.status === "ok") {
        printSucesso(result.msg)
      } else {
        printErro(result.msg)
      }
    } else {
      printErro("Entrada não pode ser vazia!")
    }
  }

  function printErro(erro) {


    $(".erro").show();
    $("#msgErro").html(erro);
    $("#msgErro").fadeTo(2000, 500).slideUp(500, function () {
      $("#msgErro").slideUp(500);
      $(".erro").hide();
    });
  }
  function printSucesso(sucesso) {


    $(".sucesso").show();
    $("#msgSucesso").html(sucesso);
    $("#msgSucesso").fadeTo(2000, 500).slideUp(500, function () {
      $("#msgSucesso").slideUp(500);
      $(".sucesso").hide();
    });
  }
});