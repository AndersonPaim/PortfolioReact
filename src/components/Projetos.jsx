import React from "react";

function Projetos(props) {
  return (
    <div className={"flex-container"}>
      <div className={"imgContainer"}>
        <img className={props.imgStyle} src={props.img1} />
      </div>
      <div className={"projetos"}>
        <h1 className={"titleProjetos"}> {props.game.titulo} </h1>

        <div className={"textProjetos"}>
          <p>Introdução: {props.game.introducao}</p>
          <p>Plataforma: {props.game.plataforma}</p>
          <p>Engine: {props.game.engine}</p>
          <p>Linguagem de Programação: {props.game.linguagem}</p>
        </div>
        <div className="btnContainer">
          <a href={props.game.linkCode} className={"btnLink"}>
            CÓDIGO
          </a>
          <a href={props.game.linkDownload} className={"btnLink"}>
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projetos;
