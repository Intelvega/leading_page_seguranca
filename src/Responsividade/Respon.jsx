import style from './Respon.module.css'
import seguraca from './img/4968099.jpg'



export default ()=> {



    return(
    <div>
         <h1 className={style.titulo} >Tópicos sobre segurança</h1>

        <div className={style.conteudo}>

        <div className={style.texto} >

            <div>
                <h1>1. Segurança em Aparelhos Eletrônicos</h1>
                <p>Em um mundo cada vez mais conectado, a segurança em aparelhos eletrônicos tornou-se uma preocupação essencial. Desde smartphones até dispositivos domésticos inteligentes, a proteção dos nossos dados pessoais e a integridade dos sistemas são fundamentais.</p>
            </div>

            <div>
                <h1>2. Cartão de Crédito:</h1>
                <p>Ao usar cartões de crédito, verifique regularmente suas transações e notifique seu banco imediatamente sobre qualquer atividade suspeita. Proteja seu PIN e nunca compartilhe informações confidenciais por telefone ou e-mail.</p>
            </div>

            <div>
                <h1>3. Dinheiro:</h1>
                <p>Mesmo em transações em dinheiro, seja consciente. Evite contar grandes quantias em público e utilize caixas eletrônicos seguros. Armazene seu dinheiro de forma discreta e evite compartilhar informações sobre sua posse de valores.</p>
            </div>

            <div>
                <h1>4. Impressão Digital:</h1>
                <p>A tecnologia de impressão digital, embora ofereça praticidade, requer vigilância. Proteja seu dispositivo com senhas adicionais, pois as impressões digitais podem ser replicadas. Mantenha seu dispositivo seguro e atualizado com as últimas atualizações de segurança.</p>
            </div>

            <div>
                <h1>5. Localização:</h1>
                <p>Gerencie as configurações de localização em seus dispositivos. Compartilhe sua localização apenas com aplicativos confiáveis e ajuste as configurações para garantir que apenas os serviços essenciais tenham acesso. Esteja ciente dos riscos associados à divulgação excessiva de informações de localização nas redes sociais.</p>
            </div>

            <div>
                <h1>6. Mensagens:</h1>
                <p>Ao trocar mensagens, seja cauteloso(a). Evite clicar em links suspeitos e não compartilhe informações pessoais sensíveis por meio de mensagens. Utilize autenticação de dois fatores sempre que possível para reforçar a segurança das suas contas.</p>
            </div>
            
        </div>
            
            <img className={style.image} src={seguraca} alt="" />

        </div>

        <rodape className={style.rodape}>
            <h1>Todos os direitos reservados</h1>
            <p>Desenvolvido por <span>Matheus Damasceno Daniel</span></p>
        </rodape>
     </div>
    )
}