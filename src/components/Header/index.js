import LogoImg from '../../assets/logo.svg'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

import { Container, Content } from "./style";
import { useContext } from 'react';

export default function Header ({handleOpenNewTransactionModal, toggleTheme}){

    const {colors, title} = useContext(ThemeContext)
    // pegar o thema do theme importa o themeContext e usar ele com o useContext

    return(
        <Container>
        
            <Content>

                <img src={LogoImg} alt='dt money'/>

                <Switch 
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={colors.text_title}
                    onColor={colors.blue_light}

                />

                <button onClick={handleOpenNewTransactionModal}>Nova Transação</button>

            </Content>

        </Container>
    )
}

// -> onChage e onde vamos colocar a function que vai trocar o thema
// -> check receber true ou false que saber se ele esta checado ou não
// -> checkedIcon e o icon de check q ele vem como padrão false para tira
// -> handleDiameter -> e a bolinha que ficar quando esta checado ou não
// -> offColor 
// -> onColor e a cor do verde que vem de padrão a e a cor quando ele esta selecionado