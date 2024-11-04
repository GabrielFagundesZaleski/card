function CriaCartao (categoria, pergunta, resposta){
  let contaimer = document.getElementById('contaimer');
  let cartao = document.createElement('article');
  cartao.className = 'cartao';
  cartao.innerHTML =`<div class="conteudo-cartao" onclick="ViraCartao(this)">
  <h3>${categoria}</h3>
  <div class="pergunta-cartao">
      <p>${pergunta}</p>
  </div>
  <div class=${"resposta-cartao"}>
   <p>${resposta}</p>
  </div>
</div>
    `

    contaimer.appendChild(cartao);
  }

function ViraCartao (card){
 const resposta = card.querySelector('.resposta-cartao');


if (resposta.style.display === 'none'){
 resposta.style.display = 'block';
}
else{
 resposta.style.display = 'none';
}
}