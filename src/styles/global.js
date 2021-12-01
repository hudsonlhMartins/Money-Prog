import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --brackground: #f0f2f5 ;
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95 ;

        --blue-light: #6933FF;
        
        --text-title: #363F5F ;
        --text-body: #969CB3 ;

        --shape: #FFFFFF ;
    }

    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    // caso a font do browser for 16px
    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
            // isso e para melho acessibilidade, caso o browser do user tive com a fonte personalizada__
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    } 

    body{
        background: var(---brackground) ;
        -webkit-font-smooth: antialiased;
        // deixar a font mais bonita, mais nitida
    } 


    body, input, button, textarea{
        // importando no input, buuton etc..
        // pq eles não import se so colocar no body eles tem sua propria font
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.5);
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        // se estiver como mais de 576 ele vai para aqui se não vai pegar 100%
        background: var(--brackground);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        background: transparent;
        border: 0;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }

    }

`;