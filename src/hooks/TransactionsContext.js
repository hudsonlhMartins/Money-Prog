import {createContext, useEffect, useState} from 'react'
import { useContext } from 'react/cjs/react.development'
import { api } from '../services/axios'


const TrasactionsContext = createContext([])

export default function TransactionsProvider ({children}){

    const [transactions, setTransactions] = useState([])

    useEffect( async ()=>{
         await api.get ('/transactions')
         .then(res => setTransactions(res.data.transactions))
    },[])

    async function createTransactions (transactionPar){

        const response = await api.post('/transactions', {
            ...transactionPar,
            createAt: new Date()
        })
        const {transaction} = response.data

        setTransactions([...transactions, transaction])
        // como estou usar o context la no dashboard quando a transaction for atualizada ele__
        // vai executa o map denv, e eu estou atualizando a transaction aqui com a respo__
        // do post da api
    }


    return(
        <TrasactionsContext.Provider value={{transactions, createTransactions}}>
            {children}
        </TrasactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TrasactionsContext)
    
    return context
}