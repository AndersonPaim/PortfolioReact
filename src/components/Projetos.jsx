import React from 'react'

function Projetos(props){

    return (
    
        <div className={"flex-container"}>
            <div style={{flexGrow: 2}}>
                <img className={props.imgStyle} src={props.img1}/>
            </div>
            <div className={"projetos"} style={{flexGrow: 6}}>
                <h1 className={"textProjetos"}> {props.titulo} </h1>
         
                <h2 className={"textProjetos2"} > {props.descricao} </h2>
                <button className={"btnCode"}>
                    <span>CÓDIGO</span>
                </button>
                <button className={"btnCode"}>
                    <span>DOWNLOAD</span>
                </button>
               
            </div>
          </div>
        );
       
}

export default Projetos;

