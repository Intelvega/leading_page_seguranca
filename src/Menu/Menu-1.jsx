import { useState } from "react"


export default ()=>{

    const [mostrarSubMenu, setMostrarSubMenu] = useState(false)

    const Submenu = () =>{
        setMostrarSubMenu(!mostrarSubMenu)
    }

    return(
        <div>
            <ul>
                <li onClick={Submenu} >Bebida
                    {
                        mostrarSubMenu == true ? (
                    <ul>
                        <li>vafe</li>
                        <li>leite</li>
                        <li>acuca</li>
                    </ul>
                        ) : null
                    }
                    
                </li>
                
            </ul>
        </div>
    )
}