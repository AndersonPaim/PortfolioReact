import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import img1 from './img/portifolio1.png'
import img2 from './img/Portifolio4.png'
import img3 from './img/portifolio5.png'
import fotoPerfil from './img/fotoPerfil.jpg'
import Projetos from './components/Projetos.jsx'
import Capa from './components/Capa.jsx'
import Topico from './components/Topico.jsx'

ReactDOM.render(

  <div className="projetosBg">
    <Capa fotoPerfil={fotoPerfil} nome={"ANDERSON PAIM"}></Capa>
    <Topico titulo={"Projetos"}></Topico>
    <div style={{ whiteSpace: 'pre-wrap' }} className="projetosBg">
    <Projetos img1={img1} im2={img2} img3={img3} titulo={"Death Valley"} descricao={"Introdução: Jogo de ondas de inimigos para derrotar enquanto defende uma torre dos ataque, o player possui diversas habilidades especiais para encarar esse desafio, sobreviva o quanto puder  \u000A Plataforma: PC  \u000A Engine: Unity  \u000A Linguagem de programação: C#  \u000A "}></Projetos>
    </div>
    <Topico titulo={"Sobre"}></Topico>
    <Topico titulo={"Contato"}></Topico>
  </div>,
  /*
    <div style={{ whiteSpace: 'pre-wrap' }} className="projetosBg">
        <Projetos
          imagem={img1}  descricao={"Introdução: Jogo de ondas de inimigos para derrotar enquanto defende uma torre dos ataque, o player possui diversas habilidades especiais para encarar esse desafio, sobreviva o quanto puder  \u000A Plataforma: PC  \u000A Engine: Unity  \u000A Linguagem de programação: C#  \u000A "}>
        </Projetos>
        <Projetos
          imagem={img2}  descricao={"Introdução: Jogo de baseball em realidade virtual onde o jogador é o rebatedor, visual cartoon e alguns puzzles para obter pontuação. \u000A Plataforma: PC \u000A Engine: Unity \u000A Linguagem de programação: C#  "}>
        </Projetos>
    </div>,
*/
    document.getElementById('root')
)

// QUEBRA DE LINHA \u000A com esse style={{ whiteSpace: 'pre-wrap' }}
/*carregar imagem 
imagem={<img src={img1}/>}
*/