import React from 'react'

function Projetos(props){

    return (

        <div className={"flex-container"}>
            <div className={"flexGrow"} style={{flexGrow: 2}}>
                <img className={props.imgStyle} src={props.img1}/>
            </div>
            <div className={"projetos"}>
                <h1 className={"textProjetos"}> {props.titulo} </h1>

                <h2 className={"textProjetos2"} > {props.descricao} </h2>
                <a href={props.linkCode}>
                    <button className={"btnCode"}>
                        <span>CÓDIGO</span>
                    </button>
                </a>
                <a href={props.linkDownload}>
                    <button className={"btnCode"}>
                        <span>DOWNLOAD</span>
                    </button>
               </a>
            </div>
          </div>
        );

}

export default Projetos;

