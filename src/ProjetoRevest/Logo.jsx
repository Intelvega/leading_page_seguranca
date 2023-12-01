import logo from './IMG/logotipo.png'
import style from './Css/Logo.module.css'

export default()=>{


    return(
        <div className={style.logotipo} >
            <img src={logo} alt="" />
        </div>
    )
}