function Converter() {
    let mostrarResultadoFinal = h2_resultado_final.innerHTML = '&gt; resultados';

    let inputValue = document.getElementById("input_valorDesejado").value;
    let inputBase = document.getElementById("select_baseConversao").value;

    let checkBin = convertBinario.checked;
    let checkDec = convertDecimal.checked;
    let checkOct = convertOctal.checked;
    let checkHex = convertHexadecimal.checked;

    if (inputValue.trim() === "") {
        alert("Por favor, preencha os campos.");
        return;
    } else if (!checkBin && !checkDec && !checkOct && !checkHex) {
        alert("Por favor, selecione uma ou mais bases em que deseja visualizar o resultado.");
        return;
    }

    if (!validarEntrada(inputValue, inputBase)) {
        alert("Por favor, insira um número válido para a base selecionada.");
        return;
    }

    let decimalValue = parseInt(inputValue, inputBase === "hexadecimal" ? 16 : 
        inputBase === "octal" ? 8 : 
        inputBase === "binario" ? 2 : 10);

    let outputHTML = "";

    if (checkDec) {
        document.querySelector(".resultado").style.display = "block";
        document.getElementById("show").style.display = "block";
        outputHTML += `<p style="margin-bottom:12px">Decimal: <b style="font-size:17px;">${decimalValue}</b></p>`;
    }
    if (checkBin) {
        document.querySelector(".resultado").style.display = "block";
        document.getElementById("show").style.display = "block";
        outputHTML += `<p style="margin-bottom:12px">Binário: <b style="font-size:17px;">${decimalValue.toString(2)}</b></p>`;
    }
    if (checkOct) {
        document.querySelector(".resultado").style.display = "block";
        document.getElementById("show").style.display = "block";
        outputHTML += `<p style="margin-bottom:12px">Octal: <b style="font-size:17px;">${decimalValue.toString(8)}</b></p>`;
    }
    if (checkHex) {
        document.querySelector(".resultado").style.display = "block";
        document.getElementById("show").style.display = "block";
        outputHTML += `<p>Hexadecimal: <b style="font-size:17px;">${decimalValue.toString(16).toUpperCase()}</b></p>`;
    }
    show.innerHTML = outputHTML;
    outputHTML = "";

    function validarEntrada(inputValue, inputBase) {
        const validChars = {
            decimal: "0123456789",
            hexadecimal: "0123456789ABCDEFabcdef",
            octal: "01234567",
            binario: "01"
        };

        for (let i = 0; i < inputValue.length; i++) {
            if (!validChars[inputBase].includes(inputValue[i])) {
                return false;
            }
        }
        return true;
    }
}


// ---------- POP UP ----------

// Pega o modal
var modal = document.getElementById("myPopUp");

// Pega o botão que fecha o modal
var closeBtn = document.getElementsByClassName("close")[0];

// Mostra o modal quando a página é carregada
window.onload = function () {
    modal.style.display = "block";
}

// Fecha o modal quando o usuário clica no botão de fechar
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora dele
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}