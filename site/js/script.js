
var contador = 1;
var img = document.querySelector("#imagem");
function mudarPosicao(){

    let botao = document.querySelector("#nao");
    botao.style.position = "absolute";

    let ramdomX = Math.random() * 414;
    let ramdomY = Math.random() * 896;
    let novaPosX = 414 - ramdomX;
    let novaPosY = 896 - ramdomY;
    console.log(novaPosX)
    console.log(novaPosY)
    botao.style.right = novaPosX + "px";
    botao.style.bottom = novaPosY + "px";

    if(contador == 1){
        img.src="https://img2.lovecell.com.br/94cbfba2b7e73dbfffbb9d1727601bba6a59b4928c887de890e15995717ad566.webp";
    }
    else if (contador == 2){
        img.src="https://img2.lovecell.com.br/e72a318b423dd6a4a7235dd6eb349268818249b419c2c24d1c3981af1456cd26.webp";
    }
    else if (contador == 3){
        img.src="https://img2.lovecell.com.br/b9887da42fc8a9f740c5787759a6b806acd6114720250b772239b0abbb231084.webp";
    }
    else {
        img.src="https://img2.lovecell.com.br/992711bc66923aff9c9a32bfb37be9cda75df20c9cb711bfa1ca3b6dac33d99d.webp";
    }
        contador++;
}

function proximaPagina(){
    let texto = document.querySelector("h1");
    let botao = document.querySelector("#botoes");
    let nao = document.querySelector("#nao");
    let sim = document.querySelector("#sim");
    
    botao.removeChild(sim);
    botao.removeChild(nao);
    img.src = "https://img2.lovecell.com.br/b886c995aa91ad23d3fcef1c58c8f39c809fd80b6e90cb756507517fe5a0c13b.webp";
    texto.textContent = "Você faria essa bondade por mim? 😁 te amooooooo😍";
    texto.style.fontSize = "30px";
}