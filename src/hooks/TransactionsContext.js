import {createContext, useEffect, useState} from 'react'
import { useContext } from 'react/cjs/react.development'
import {db} from '../firebase/FirebaseConnection'
import {getDocs, addDoc, collection} from 'firebase/firestore'
import {format} from 'date-fns'




const TrasactionsContext = createContext([])

export default function TransactionsProvider ({children}){

    const [transactions, setTransactions] = useState([])

    useEffect(()=>{

        const collectionRef = collection(db, 'transactions')
        const list = []
        async function load(){
            await getDocs(collectionRef).then((snapshot)=>{
                snapshot.forEach(doc =>{
                    list.push({
                        title: doc.data().title,
                        value: doc.data().value,
                        category: doc.data().category,
                        type: doc.data().type,
                        createAt: doc.data().createAt,
                        createAtFormated: format(doc.data().createAt.toDate(), 'dd/MM/yyyy'),
                        id: doc.id
                    })
                })
            }).then(()=>{
                setTransactions(list)
            })
        }
        load()

    },[])

    async function createTransactions (title, value, category, type){
        const collectionRef = collection(db, 'transactions')
        const createAt = new Date()
        await addDoc(collectionRef, {
            title,
            value: value,
            category,
            type,
            createAt

        }).then((res)=>{
            setTransactions([...transactions, {
                title,
                value,
                category,
                type,
                createAt,
                createAtFormated: format(createAt.toDate(), 'dd/MM/yyyy'),
                id: res.id
            }])
        })
        
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