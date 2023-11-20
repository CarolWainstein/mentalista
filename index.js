document.addEventListener('DOMContentLoaded', function () {
    var segredo = parseInt(Math.random() * 101);
    let tentativas = 3;

    function advinha() {
        while (tentativas > 0) {

            var chute = prompt('Digite um número entre 0 e 100. Você tem 3 tentativas.');

            if (chute == segredo) {
                alert('Você acertou!');
                break;
            } else if (chute > segredo) {
                alert('Você errou, o número é menor.');
                tentativas--;
            } else if (chute < segredo) {
                alert('Você errou, o número é maior.');
                tentativas--;
            }

            if (tentativas === 0) {
                alert(`Você usou todas as tentativas o número correto é ${chute}.`);
            }
        }
    }

    advinha();
});

