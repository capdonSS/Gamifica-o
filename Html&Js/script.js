
    // Inicializa a variável de pontuação
    let pontuacaoShare = 100;
  
    // Função para aumentar a pontuação e atualizar na tela
    function celular() {
        pontuacaoShare -= 5;
      document.getElementById("pontuacaoShare").textContent = pontuacaoShare;
    }
    function organizaçãoNegativa() {
        pontuacaoShare -= 5;
      document.getElementById("pontuacaoShare").textContent = pontuacaoShare;
        }
        function organizaçãoPositiva() {
            pontuacaoShare += 5;
      document.getElementById("pontuacaoShare").textContent = pontuacaoShare;
        }
  