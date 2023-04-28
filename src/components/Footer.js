import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleChange(e){
        setInputValue(e.target.value)
    }
    function checkMail(){
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input value={inputValue}
                   onChange={handleChange}
                   placeholder="Entrez votre mail"
                   onBlur={checkMail}
            />
        </footer>
    )
}
export default Footer