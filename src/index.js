import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import img1 from './img/portifolio1.png'
import img4 from './img/portifolio6.png'
import img7 from './img/tw4.png'
import img12 from './img/mud1.png'
import img13 from './img/portifolio3.png'
import fotoPerfil from './img/fotoPerfil.jpg'
import gitIcon from './img/github.png'
import itchIcon from './img/itchio.svg'
import Projetos from './components/Projetos.jsx'
import Capa from './components/Capa.jsx'
import Topico from './components/Topico.jsx'
import Sobre from './components/Sobre.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'

ReactDOM.render(

  <div className="projetosBg" style={{ whiteSpace: 'pre-wrap' }}>
    <Capa fotoPerfil={fotoPerfil} img={gitIcon} img2={itchIcon} nome={"ANDERSON PAIM"}></Capa>
    <Topico id={"Projetos"} titulo={"Projetos"}></Topico>
    <div className="projetosBg">
    <Projetos imgStyle={"imgProjetos"} img1={img1} titulo={"Death Valley"} linkDownload={"https://andersonpaim.itch.io/death-valley"} linkCode={"https://github.com/AndersonPaim/DeathValley"} descricao={"Introdução: Jogo de ondas de inimigos para derrotar enquanto defende uma torre do ataque dos inimigos. \u000A Plataforma: PC  \u000A Engine: Unity  \u000A Linguagem de programação: C#  \u000A "} ></Projetos>
    <Projetos imgStyle={"imgProjetos"} img1={img4} titulo={"CrazyBall"} linkDownload={"https://itch.io/queue/c/1454709/meus-projetos?game_id=951717"} linkCode={"https://itch.io/queue/c/1454709/meus-projetos?game_id=951717"} descricao={"Introdução: Jogo de baseball em realidade virtual onde o jogador é o rebatedor, com alguns puzzles para obter pontuação.  \u000A Plataforma: PC  \u000A Engine: Unity  \u000A Linguagem de programação: C#  \u000A "}></Projetos>
    <Projetos imgStyle={"imgProjetos"} img1={img7} titulo={"TankWar"} linkDownload={"https://itch.io/queue/c/1454709/meus-projetos?game_id=680096"} linkCode={"https://github.com/AndersonPaim/TankWar"} descricao={"Introdução: Jogo de combate de tanque com multijogador local que utiliza um controle alternativo desenvolvido com arduino.  \u000A Plataforma: PC  \u000A Engine: Unity + Arduino  \u000A Linguagem de programação: C# e C++ \u000A "}></Projetos>
    <Projetos imgStyle={"imgProjetos"} img1={img13} titulo={"Projeto AR"} linkDownload={"https://andersonpaim.itch.io/projeto-ar"} descricao={"Introdução: Jogo de cartas em realidade aumentado, onde o personagem da carta ganha vida na tela do celular, o jogo tem um combate em turnos com diferentes ataques. \u000A Plataforma: Mobile   \u000A Engine: Unity + Vuforia  \u000A Linguagem de programação: C# \u000A "}></Projetos>
    <Projetos imgStyle={"imgProjetos2"} img1={img12} titulo={"Mais Um Dia"} linkDownload={"https://andersonpaim.itch.io/maisumdia"} linkCode={"https://github.com/AndersonPaim/MaisUmDia"} descricao={"Introdução: Jogo de corrida, com obstaculos pelo percurso o objetivo é chegar até o final, o jogo conta com sistema de login, banco de dados para save e uso de giroscópio para movimentação do player. \u000A Plataforma: Mobile  \u000A Engine: Framework Phaser3  \u000A Linguagem de programação: JavaScript \u000A "}></Projetos>
    </div>


    <Topico id={"Sobre"} titulo={"Sobre"}></Topico>
    <Sobre sobre={"Meu nome é Anderson Paim, tenho 21 anos, moro em  Gravataí-RS, sou estudante de Jogos Digitais na  Universidade do Vale do Rio dos Sinos(UNISINOS), estou na área de desenvolvimento de jogos e programação desde 2018, meu maior foco como desenvolvedor são de desenvolvimento de jogos na Unity."}/>
    <Topico id={"Contato"} titulo={"Contato"}></Topico>
    <Contato></Contato>
    <Footer></Footer>
  </div>,

    document.getElementById('root')
)

// QUEBRA DE LINHA \u000A com esse style={{ whiteSpace: 'pre-wrap' }}
/*carregar imagem
imagem={<img src={img1}/>}
*/