import style from './Css/Qualificacos.module.css'
import qualidicacao from './IMG/qualificacao.png'
import { BiCheck } from "react-icons/bi"

export default ()=>{



    return(
        <div>
            <div className={style.class80}>
                <div className={style.principal} >
                    
                    <div className={style.class50} >
                        <h2>Qualificações</h2>

                        <p> Sou um especialista em personalização automotiva, apaixonado por 
                            transformar carros em verdadeiras expressões de estilo e personalidade. <br /> <br />
                            Ofereço serviços de envelopamento, aplicação de LEDs personalizados,
                            insulfilm de alta qualidade e adesivos criativos para tornar seu
                            veículo único. <br /> <br /> Seja para aprimorar a estética, aumentar a visibilidade
                            oturna ou garantir privacidade, estou pronto para atender às suas
                            necessidades. <br /> <br /> Deixe-me dar vida às suas ideias e tornar seu carro
                            uma obra-prima personalizada que chama a atenção por onde passa.
                        </p>

                    </div>


                    <div className={style.class50} >
                        <img src={qualidicacao} alt="" />
                    </div>


                    <div className={style.class100} >
                        <div>
                            <div className={style.contDiv} >
                                <h3>Missão</h3>
                                <p>Nossa missão é tornar cada carro uma expressão única de estilo 
                                    e personalidade. Buscamos oferecer serviços de envelopamento, 
                                    aplicação de LED, insulfilm e adesivos que elevem a estética 
                                    e funcionalidade de cada veículo. Nosso compromisso é proporcionar 
                                    a máxima satisfação dos clientes, transformando carros comuns 
                                    em verdadeiras obras-primas personalizadas.
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className={style.contDiv} >
                                <h3>Visão</h3>
                                <p>Ser em 2024 referência no segmento de estética automotiva, surpreendendo
                                nossos clientes, transformando seu veículo em ambiente seguro e com aparência impecável.
                                </p>

                            </div>
                            
                        </div>

                        <div>
                            <div className={style.contDiv} >
                                <h3>Valores</h3>
                                <li> <BiCheck></BiCheck> <p>Qualidade</p> </li>
                                <li> <BiCheck></BiCheck> <p>Responsabilidade</p> </li>
                                <li> <BiCheck></BiCheck> <p>Sustentabilidade</p> </li>
                                <li> <BiCheck></BiCheck> <p>Transparência</p> </li>
                                <li> <BiCheck></BiCheck> <p>Humildade</p> </li>
                                <li> <BiCheck></BiCheck> <p>Colaboração</p> </li>
                                <li> <BiCheck></BiCheck> <p>Diversidade</p> </li>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}