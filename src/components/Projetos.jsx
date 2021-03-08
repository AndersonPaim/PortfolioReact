import React from 'react'

/*  OUTRA MANEIRA DE EXPORTAR A FUNÇÃO
function Primeiro(){
    return (
        <div>
            <h1>Primeiro componente</h1>
            <h2> teste react </h2>
        </div>
    )
}
export default Primeiro*/


export default props =>

    
    <div className={"projetos"} id="projetos">   
        <table>
            <tr>
                <td> <img className={"projetosImg"} src={props.imagem}/> </td>
                <td>
                    <div  className={"projetosExpand"}>
                        <h2>{props.descricao}</h2>
                    </div> 
                </td>
            </tr>
        </table>
    </div>
    
    /*
     <span type="button"  className={"projetosTitulo"}> Death Valley</span>
    <div className={'fundoProjetos'}>
        <img className={"projetosImg"} src={props.imagem}/>
        <span type="button" class="projetosTitulo" > <h1>Death Valley</h1></span>
        <div className={"projetosExpand"}>
            <h2> {props.descricao} </h2>
        </div>
    </div>*/
    



