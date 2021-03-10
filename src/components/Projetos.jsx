import React,{useState} from 'react'

function Projetos(props){
    const [show,setShow]=useState(true)
      
    return (
    <div>
        <table>
            <tr>
                <td> <img className={props.imgStyle} src={props.img1}/></td>
                <td>
                    <button onClick={()=>setShow(!show)} className="projetos"> <h1> {props.titulo} </h1></button>      
                    <div style={{display: show && "none"}} className="projetosExpand">
                    <h2> {props.descricao} <img className={props.imgStyle2} src={props.img2}/> <img className={props.imgStyle2} src={props.img3}/></h2>
                    </div>   
                </td>
            </tr>
        </table>
    </div>
    );
}

export default Projetos;

