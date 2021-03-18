import React from 'react'
import emailjs from 'emailjs-com'

export default function Contato(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_uzgdphc', e.target, 'user_VWFwa0DSfNSh2JNUpvvc9')
            .then((result) => {
                console.log(result.text)
            },(error) => {
                console.log(error.text)
            })
            alert("Email enviado")
            e.target.reset()
    }

    return(
        <div>
        <form onSubmit={sendEmail}>
            <div className={"emailForm"}>
                <label><b>Nome</b></label>
                <input type="text" name="name" required/>
                <label><b>Email</b></label>
                <input type="text" name="email" id="email" required/>
                <label><b>Assunto</b></label>
                <input type="text" name="subject" required/>
                <label><b>Mensagem</b></label>
                <textarea name="message" className={"msg"} required></textarea>   
                <input type="submit" className={"sendBtn"}/>        
            </div>
        </form>
        </div>
            
        
    
    )
}