import LogoImg from '../../assets/logo.svg'

import { Container, Content } from "./style";

export default function Header ({handleOpenNewTransactionModal}){

    return(
        <Container>
        
            <Content>

                <img src={LogoImg} alt='dt money'/>
                <button onClick={handleOpenNewTransactionModal}>Nova Transação</button>

            </Content>

        </Container>
    )
}