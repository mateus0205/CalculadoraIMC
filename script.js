function calcularIMC() {
    event.preventDefault();
    // leitura dos dados
    // Pegando os valores corretos dos inputs
    let altura = document.getElementsByName('altura')[0].value.replace(",", ".");
    let peso = document.getElementsByName('peso')[0].value.replace(",", "."); // replace pega as virgulas digitas

    // conversao de text -> number
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // verificação dos valores digitados
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById("resultado").innerText = "Digite valores válidos";
        return;
    }


    // calculo do imc 
    let resultado = peso / (altura * altura)

    // calculando metricas 
    if((resultado >= 18.5 && resultado <= 24.9 )){
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2) + " normal";
    } else if (resultado >=25 && resultado <= 29.9){
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2)+ " sobrepeso";
    } else if (resultado >= 30 && resultado <= 34.9){
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2)+ " obesidade grau I";
    } else if (resultado >= 35 && resultado <= 39.9){
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2)+ " obesidade grau II";
    }else if (resultado >= 40){
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2)+  " obesidade grau III";
    }

    // resultado
}