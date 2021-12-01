import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import Entradasimg from '../../assets/entradas.svg'
import SaindasImg from '../../assets/saidas.svg'
import { useState } from 'react'

import { Container, TransactionTypeContainer, RadioBox } from './styles'

import { useTransactions } from '../../hooks/TransactionsContext'


export default function NewTransactionModal ({isNewTransactionModalOpen ,handleCloseNewTransactionModal}){
    const [type, setType] = useState('deposit')

    const [title, setTitle] = useState('')
    const [amount, setValue] = useState('')
    const [category, setCategory] = useState('')

    const {createTransactions} = useTransactions()


    async function handleCreateNewTransaction (e){
        e.preventDefault()
        
       
             await createTransactions(
                {
                    title,
                    amount,
                    category,
                    type,
                }
            )
        // ele vai esperar essa function com await para depois executar o resto
            setTitle('')
            setValue('')
            setCategory('')
            setType('deposit')
            handleCloseNewTransactionModal()
            
        
        
    }


    return(
        <Modal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >

            <button onClick={handleCloseNewTransactionModal} className='react-modal-close' >
                <img src={CloseImg} />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastra Transação</h2>
                <input type='text' 
                    placeholder='Titulo' 
                    value={title} 
                    onChange={(e)=>{setTitle(e.target.value)}} 
                />

                <input type='number' 
                    placeholder='Valor'
                    value={amount}  
                    onChange={(e)=>{setValue(Number(e.target.value))}} 
                />

                <TransactionTypeContainer>

                    <RadioBox 
                        type='button'
                        onClick={()=>{ setType('deposit')}}
                        isActive={type ==='deposit'}
                        activeColor = 'green'
                    >
                            <img src={Entradasimg} />
                            <span>Entradas</span>
                    </RadioBox>

                    <RadioBox 
                        type='button'
                        onClick={()=>{ setType('withdraw')}}
                        isActive = {type ==='withdraw'}
                        activeColor = 'red'
                    >
                        <img src={SaindasImg} />
                        <span>Saidas</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input placeholder='Categoria' value={category} onChange={(e)=>{setCategory(e.target.value)}} />


                <button type='submit'>Cadastrar</button>
            </Container>
      </Modal>
    )
}