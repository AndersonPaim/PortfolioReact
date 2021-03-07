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

    <div className={'projetos'}>
        <table>
            <tr>
                <td>{props.imagem}</td>
                <td><h2> {props.descricao} </h2></td>
            </tr>
        </table>
        
    </div>
