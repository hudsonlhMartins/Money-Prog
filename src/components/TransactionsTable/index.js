import { useTransactions } from "../../hooks/TransactionsContext";
import { Container } from "./styles";


export default function TransactionTable(){

    const {transactions, RemoveItem} = useTransactions()

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>


                {transactions &&(
                    <>
                    {transactions.map(transaction =>(
                            
                            <tr key={transaction.id}>
                               
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>{
                                    new Intl.NumberFormat('pt-BR',{
                                        style: 'currency',
                                        currency: 'BRL',
                                    }).format(transaction.value)
                                }</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createAtFormated}</td>
                                    
                            </tr>
                        
                    ))}
                    </>
                )}

                

                </tbody>
            </table>
        </Container>
    )
}