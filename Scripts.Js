//VERSÃO 1
function funcao1() {
    var x = document.getElementById("i1").value;
    var y = document.getElementById("i2").value;
    var z = x * y;
    if (z > 100) {
        document.getElementById("res").style.color = "red";
        alert("Muito caro!");
    } else {
        document.getElementById("res").style.color = "green";
    }
    document.getElementById("res").innerHTML = "Total: " + z;
    console.log("Calculado");
}
//VERSÃO 2
const precoSemente = 150.0;
function calcularInvestimentoTotal(quantidade) {
    return quantidade * precoSemente;
}

function atualizarInterface(valorTotal) {
    const display = document.getElementById("resultadoDisplay");
//VERSÃO 1
//VERSÃO 2
    display.innerText = `O investimento total é: R$ ${valorTotal.toFixed(2)}`;
    display.style.color = valorTotal > 1000 ? "orange" : "green";
}
<img src="img/img-plantas"
<img src="img/img-plantas" 
    alt="Plantação tecnológica"
    class="rounded-lg shadow-xl border-4 border-white dark:border-zinc-700">
