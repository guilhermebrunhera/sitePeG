import '../inicio.css';
import imagem1svg from "../fotosJuntos2.svg"
import imagem2svg from "../fotosJuntos1.svg"
import imagem3svg from "../fotosJuntos3.svg"
import imagem1 from "../fotosJuntos2.jpeg"
import imagem2 from "../fotosJuntos1.jpeg"
import imagem3 from "../fotosJuntos3.jpeg"
import imagem4 from "../fotosJuntos4.jpeg"

function Inicio() {
  return (
    <div>
      <div className='containerInicio'>
        <span className='titleInicio'>Carta aberta ao meu amor</span><br />
        <span className='titleInicioMini'>1 Mês de namoro <img src="../favicon-16x16.png" alt='heart'></img></span><br /><br /><br />

        <span className='textContainer'>"Minha querida namorada,<br /><br />

Ao longo de todas as nossas vidas, acredito que sempre houve algo especial entre nós. 
Nós nos conhecemos há tanto tempo que, às vezes, parece que já percorremos um caminho tão longo juntos.
 Mas, por mais que tenhamos tido altos e baixos em experiências passadas,
  eu jamais imaginaria que você seria alguém tão especial pra mim.<br /><br />

</span>
<img src={imagem1} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

Quando penso em você, 
lembro-me de todas as coisas que me fazem sentir feliz. 
Seu sorriso, seu olhar apaixonante, a forma como é forte para decidir o que é melhor pra você e a forma como me trata. 
Cada pequeno gesto que você faz me faz sentir mais amado de ter você em minha vida.<br /><br />

</span>
<img src={imagem1svg} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

O que mais me encanta é a nossa história. Nós não começamos nossa jornada como um casal comum. Em vez disso, 
nossos caminhos se cruzaram várias vezes ao longo dos finais de ano em família, 
e eu nunca imaginaria que havia algo mais profundo entre nós.<br /><br />

</span>
<img src={imagem2} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

Quando finalmente encontramos o caminho um para o outro, 
senti como se o universo estivesse alinhado perfeitamente. 
E agora, aqui estamos, juntos e apaixonados, 
celebrando nosso primeiro mês juntos e eu diria que vamos comemorar por anos essa data.<br /><br />

</span>
<img src={imagem2svg} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

Minha garota, saiba que eu sempre serei grato por cada momento que compartilhamos. 
Eu sempre serei o seu companheiro de vida, o seu confidente, o seu apoioador número 1. 
Eu amo você mais do que qualquer palavra pode expressar, 
e mal posso esperar para ver onde nossa história juntos nos levará.<br /><br />

</span>
<img src={imagem3} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

É com você que eu quero passar a minha vida, sempre juntos nas alegrias e nas tristezas, 
sabemos que é complicado e que vamos passar por várias dificuldades, mas de uma coisa eu sei,
Se realmente nos amamos, tudo isso passará.<br/><br/>

</span>
<img src={imagem3svg} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

Não sei se você acredita em 'final feliz' ou até mesmo em 'pra sempre', porém, de uma coisa eu sei,
quero sempre me sentir feliz assim enquanto dure.<br/><br/>

</span>
<img src={imagem4} className="imgNosDois" alt="Foto" ></img><br/><br/>
<span>

*Obs: Essa foto acima, espero muito que iremos recriá-la no nosso casamento.<br/><br/>

Com todo meu amor,<br/><br/>

Ass. Guilherme Cintra Brunhera, seu namorado."</span>
      </div>
    </div>
  );
}

export default Inicio;
