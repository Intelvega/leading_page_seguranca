import insul from './IMG/insul.png'
import Envelopamento from './IMG/Envelopamento.png'
import Adesivo from './IMG/Adesivo.png'
import Led from './IMG/Led.png'

import style from './Css/Servicos.module.css'

export default ()=>{


    return(
        <div className={style.todoServer} >
            <h1 className={style.ofere} >Serviços que oferecemos</h1>
            <div className={style.servicos} >
                <div className={style.server} >
                    <p>Aplicação de insulfilme</p>
                    <img src={insul} alt="" />
                </div  >

                <div className={style.server}>
                    <p>Envelopamento</p>
                    <img src={Envelopamento} alt="" />
                </div>

                <div className={style.server}>
                    <p>Aplicação de Adesivos</p>
                    <img src={Adesivo} alt="" />
                </div>

                <div className={style.serverUlt}>
                    <p>Aplicação de Led</p>
                    <img src={Led} alt="" />
                </div>
                
            </div>
        </div>
    )
}