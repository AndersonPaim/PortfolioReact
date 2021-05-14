import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import img1 from "./img/portifolio1.png";
import img4 from "./img/portifolio6.png";
import img7 from "./img/tw4.png";
import img12 from "./img/mud1.png";
import img13 from "./img/portifolio3.png";
import fotoPerfil from "./img/fotoPerfil.jpg";
import gitIcon from "./img/github.png";
import itchIcon from "./img/itchio.svg";
import Projetos from "./components/Projetos.jsx";
import Capa from "./components/Capa.jsx";
import Topico from "./components/Topico.jsx";
import Sobre from "./components/Sobre.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";

const projetos = {
  deathValley: {
    titulo: "Death Valley",
    linkDownload: "https://andersonpaim.itch.io/death-valley",
    linkCode: "https://github.com/AndersonPaim/DeathValley",
    introducao:
      "Jogo de ondas de inimigos para derrotar enquanto defende uma torre do ataque dos inimigos.",
    plataforma: "PC",
    engine: "Unity",
    linguagem: "C#",
  },
};

ReactDOM.render(
  <>
    <Capa
      fotoPerfil={fotoPerfil}
      img={gitIcon}
      img2={itchIcon}
      nome={"ANDERSON PAIM"}
    ></Capa>
    <Topico id={"Projetos"} titulo={"Projetos"}></Topico>
    <div className="projetosBg">
      <Projetos
        imgStyle={"imgProjetos"}
        game={projetos.deathValley}
        img1={img1}
      ></Projetos>
      <Projetos
        imgStyle={"imgProjetos"}
        img1={img4}
        game={projetos.deathValley}
      ></Projetos>
      <Projetos
        imgStyle={"imgProjetos"}
        img1={img7}
        game={projetos.deathValley}
      ></Projetos>

      <Topico id={"Sobre"} titulo={"Sobre"}></Topico>
      <Sobre
        sobre={
          "Meu nome é Anderson Paim, tenho 21 anos, moro em  Gravataí-RS, sou estudante de Jogos Digitais na Universidade do Vale do Rio dos Sinos(UNISINOS), estou na área de desenvolvimento de jogos e programação desde 2018, meu maior foco como desenvolvedor é o desenvolvimento de jogos na Unity."
        }
      />
      <Topico id={"Contato"} titulo={"Contato"}></Topico>
      <Contato></Contato>
      <Footer></Footer>
    </div>
  </>,

  document.getElementById("root")
);

// QUEBRA DE LINHA \u000A com esse style={{ whiteSpace: 'pre-wrap' }}
/*carregar imagem 
imagem={<img src={img1}/>}
*/
