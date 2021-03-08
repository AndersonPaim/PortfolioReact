import React from 'react'
import Typed from 'react-typed';

export default props => 
   
    <div className={"capaFundo"}>      
        <ul id="menu">
            
            <li><span><p>Portfolio</p></span> </li>
            <a href={"#Projetos"}><li><span><p>Projetos</p></span> </li></a>
            <a href={"#Sobre"}><li><span><p>Sobre</p></span> </li></a>
            <a href={"#Contato"}><li><span><p>Contato</p></span> </li></a>
        </ul>   
        <img className={"fotoPerfil"} src={props.fotoPerfil}/>
        <h1 className={"textoCapa"}>{props.nome}</h1>
        <Typed className={"textoCapa2"}
                strings={[
                    'Programador ',
                    'Game Designer ',]}
                    typeSpeed={70}
                    backSpeed={40}
                    loop >
        </Typed>
    </div>


