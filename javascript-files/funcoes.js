// Variavel Global Display
let proposicao = ""; // Logica Back
let proposicaoDisplay = ""; // Front Display

// Adiciona letra/caractere na proposição
function addCaractere(caract) {
    proposicao += caract;
    proposicaoDisplay += caract;
    atualizarProp();
}

// Função para deletar o último caractere ou limpar a proposição
function deleteProp(text) {
    if (text === "⌫") {
        proposicao = proposicao.slice(0, -1);
        proposicaoDisplay = proposicaoDisplay.slice(0, -1);
    } else {
        proposicao = "";
        proposicaoDisplay = "";
    }
    atualizarProp();
}

// Função para atualizar o display 
function atualizarProp() {
    document.getElementById('display').value = proposicaoDisplay;
}

// Sentenca Logica
const V = true
const F = false

function sentenca() {


    if (proposicao.includes("→")) {

        let partes = proposicao.split("→");

        let novaProposicao = "";

        for (let i = 1; i < partes.length; i++) {
            let argumentoAnterior = partes[0].trim();
            let argumentoPosterior = partes[1].trim();

            novaProposicao = `!(${argumentoAnterior}) || (${argumentoPosterior})`
        }

        proposicao = novaProposicao;
    }

    if (proposicao.includes("↔")) {
        let partesB = proposicao.split("↔")

        let novaProposicaoB = "";

        for (let i = 0; i < partesB.length; i++) {
            let argumentoAnteriorB = partesB[0].trim();
            let argumentoPosteriorB = partesB[1].trim();

            novaProposicaoB = `(${argumentoAnteriorB} && ${argumentoPosteriorB}) || (!(${argumentoAnteriorB}) && !(${argumentoPosteriorB}))`;
        }

        proposicao = novaProposicaoB;
    }

    let translatedExpression = proposicao.replace(/~/g, "!").replace(/\^/g, "&&").replace(/v/g, "||")

    let result = translatedExpression

    //Valores:
    
    

    deleteProp();
    alert(result);
    alert(eval(result));
}

export { proposicao, deleteProp, addCaractere, sentenca }