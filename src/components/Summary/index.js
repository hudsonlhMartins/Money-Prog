import { useContext } from 'react'
import EntradasImg from '../../assets/entradas.svg'
import SaidasImg from '../../assets/saidas.svg'
import TotalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/TransactionsContext'


import {Container} from './styles'

export default function Summary (){

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, item)=>{
        // criando um objecto acc, esse item e todos item do array transaction ele vai pecorrer todos
        if(item.type == 'deposit'){
            acc.deposits += Number(item.amount)
            // aqui esse pegando o amount do item e colocando ele no objecto.depoist
            acc.total +=Number(item.amount)
        }else{
            acc.withdraws += Number(item.amount)
            acc.total -=Number(item.amount)

        }
        
        return acc
        // no reduce sempre tem que return a objeto que vc criou
    }, {
        deposits: 0,
        withdraws: 0,
        total:0
    })

    
    return(
        <Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt='Entradas' />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            
            <div>
                <header>
                    <p>Saindas</p>
                    <img src={SaidasImg} alt='Saida' />
                </header>

                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                    
                </strong>
            </div>

            
            <div className='heighlight-backgound'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt='total' />
                </header>

                <strong>
                {new Intl.NumberFormat('pt-BR',{
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>


        </Container>
    )
}