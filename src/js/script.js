function Converter() {
    
    let mostrarResultadoFinal = h2_resultado_final.innerHTML = '&gt; resultados'
    // h2_inserir_valor.innerHTML = 'insira o valor'

    let inputValue = document.getElementById("input_valorDesejado").value;
    let inputBase = document.getElementById("select_baseConversao").value;

    let checkBin = convertBinario.checked;
    let checkDec = convertDecimal.checked;
    let checkOct = convertOctal.checked; let checkHex = convertHexadecimal.checked;

    if (inputValue.trim() === "") {
        alert("Por favor, preencha os campos.");
        return;
    } else if (checkBin == false && checkDec == false &&
        checkOct == false && heckHex == false) {
        alert("Por favor, selecione uma ou mais bases em que deseja visualizar o resultado.");
        return true;
    }

    if (!validarEntrada(inputValue, inputBase)) {
        alert("Por favor, insira um número válido para a base selecionada.");
        return;
    }

    let decimalValue = parseInt( inputValue, inputBase === "hexadecimal"? 16: 
        inputBase === "octal" ? 8: 
        inputBase === "binario"? 2 : 10
    );
    
    let outputHTML = "";

    if (document.getElementById("convertDecimal").checked) {
        document.getElementById("show").style.display = "block";
        outputHTML += `<p style="sans-serif; padding: 15px; background-color: #36615f; margin: 10px; border-radius: 10px; font-size: 15px;">Decimal: ${decimalValue}</p>`;
    }
    if (document.getElementById("convertHexadecimal").checked) {
        document.getElementById("show").style.display = "block";
        outputHTML += `Hexadecimal: ${decimalValue.toString(16).toUpperCase()}</p>`;
    }
    if (document.getElementById("convertOctal").checked) {
        document.getElementById("show").style.display = "block";
        outputHTML += `Octal: ${decimalValue.toString(8
        )}</p>`;
    }
    if (document.getElementById("convertBinario").checked) {
        document.getElementById("show").style.display = "block";
        outputHTML += `<p style="sans-serif; padding: 15px; background-color: #15672e; margin: 10px; border-radius: 10px; font-size: 15px;">Binário: ${decimalValue.toString(2
        )}</p>`;
    }
    show.innerHTML = outputHTML;

    function validarEntrada(inputValue, inputBase) {
        var validChars = "";

        if (inputBase === "decimal") {
            validChars = "0123456789";
        } else if (inputBase === "hexadecimal") {
            validChars = "0123456789ABCDEFabcdef";
        } else if (inputBase === "octal") {
            validChars = "01234567";
        } else if (inputBase === "binario") {
            validChars = "01";
        }

        for (var i = 0; i < inputValue.length; i++) {
            if (validChars.indexOf(inputValue[i]) === -1) {
                return false;
            }
        }
        if ((imagem.hidden = true)) {
            return true;
        }
    }
}

// ---------- POP UP ----------

// Pega o modal
var modal = document.getElementById("myPopUp");

// Pega o botão que fecha o modal
// var closeBtn = document.getElementsByClassName("close")[0];

// Mostra o modal quando a página é carregada
// window.onload = function () {
//     modal.style.display = "block";
// }

// Fecha o modal quando o usuário clica no botão de fechar
// closeBtn.onclick = function () {
//     modal.style.display = "none";
// }

// Fecha o modal quando o usuário clica fora dele
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     }
