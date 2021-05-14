import React from "react";
import Typed from "react-typed";
export default (props) => (
  <div className={"capaFundo"}>
    {/*   
        <ul id="menu">  
            <li><span><p>Portfolio</p></span> </li>
            <a href={"#Projetos"}><li><span><p>Projetos</p></span> </li></a>
            <a href={"#Sobre"}><li><span><p>Sobre</p></span> </li></a>
            <a href={"#Contato"}><li><span><p>Contato</p></span> </li></a>
    </ul>  */}
    <div className="capaContainer">
      <img className={"fotoPerfil"} src={props.fotoPerfil} />
      <h1 className={"textoCapa"}>{props.nome}</h1>
      <Typed
        className={"textoCapa2"}
        strings={["Programador ", "Game Designer "]}
        typeSpeed={70}
        backSpeed={40}
        loop
      ></Typed>

      <div className={"buttonContainer"}>
        <a href="https://github.com/AndersonPaim" className="btnGit">
          <img className={"githIcon"} src={props.img} />
          <span>Github</span>
        </a>
        <a href="https://itch.io/c/1454709/meus-projetos" className={"btnGit"}>
          <img className={"githIcon"} src={props.img2} />
          <span>Itch.io</span>
        </a>
      </div>
    </div>
  </div>
);
