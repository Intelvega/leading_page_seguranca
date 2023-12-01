import { BiLogoWhatsapp } from "react-icons/bi";

import style from './Css/Whats.module.css'

export default()=>{


    return(
        <div className={style.logoWhats} >
         <a href="https://api.whatsapp.com/send?phone=5571988674672&text=Ol%C3%A1%2C+gostaria+de+realizar+um+or%C3%A7amento." target="_blank"><BiLogoWhatsapp></BiLogoWhatsapp></a>   
        </div>
    )
}