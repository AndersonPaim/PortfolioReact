import React,{useState} from 'react'

function Projetos(props){
    const [show,setShow]=useState(true)
      
    return (
    <div>
        <table>
            <tr>
                <td> <img src={props.img1}/></td>
                <td>
                    <button onClick={()=>setShow(!show)} class="projetos"> <h1> {props.titulo} </h1></button>      
                    <div style={{display: show && "none"}} class="projetosExpand">
                    <h2> {props.descricao} <img src={props.img2}/> <img src={props.img3}/></h2>
                    </div>   
                </td>
            </tr>
        </table>
    </div>
    );
}

export default Projetos;

    






