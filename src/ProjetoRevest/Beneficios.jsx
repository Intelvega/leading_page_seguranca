import carro1 from './IMG/carro1.png'

import style from './Css/Beneficios.module.css'

export default ()=>{


    return(
        <div className={style.beneficio}>
            <h1>Benefícios</h1>
            <div className={style.conteudo} >

            
                <img className={style.carro1} src={carro1} alt="carro vermelho" />

                <div className={style.divs} >
                        <div>
                            <ul className={style.fonte} >Benefícios da película profissional
                                <ul>
                                    <li>Redução de até 70% do calor</li>
                                    <li>Proteção contra raios UV</li>
                                    <li>Segurança e privacidade</li>
                                    <li>Alta visibilidade interna</li>
                                    <li>Garantia de 5 anos</li>
                                </ul>
                            </ul>
                        </div>

                        <div>
                            <ul className={style.fonte} >Benefícios do Envelopamento
                                <ul>
                                    <li>Proteção da pintura</li>
                                    <li>Variedade de cores e acabamentos</li>
                                    <li>Removível e reversível</li>
                                </ul>
                            </ul>
                        </div>

                        <div>
                            <ul className={style.fonte} >Benefícios de Aplicação de Adesivos
                                <ul>
                                    <li>Personalização Estilística</li>
                                    <li>Publicidade Móvelntos</li>
                                    <li>Removível e reversível</li>
                                </ul>
                            </ul>
                        </div>

                        <div>
                            <ul className={style.fonte} >Benefícios de Aplicação de Led
                                <ul>
                                    <li>Iluminação Brilhante</li>
                                    <li>Vida Útil Longa</li>
                                    <li>Resposta Instantânea</li>
                                </ul>
                            </ul>
                        </div>
                    
                   
                </div>        
            
            </div>
        </div>
    )
}